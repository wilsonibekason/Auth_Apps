"use client";

import React, { useState } from "react";
import axios from "@/utils/baseUrl";
import toast from "react-hot-toast";

const PatternLock: React.FC = () => {
  const [selectedNodes, setSelectedNodes] = useState<number[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  // Define the API endpoint for pattern matching
  const patternMatchAPI = "/pattern/match-pattern"; // Update with your actual API endpoint

  const handleNodeClick = (nodeIndex: number) => {
    if (!isAuthenticated && clickCount < 5) {
      setSelectedNodes([...selectedNodes, nodeIndex]);
      setClickCount((prev) => prev + 1);
    } else if (clickCount >= 5) {
      // Display a toast notification when the user exceeds five clicks
      toast.error("You can only select up to five nodes.");
    }
  };

  const resetPattern = () => {
    setSelectedNodes([]);
    setClickCount(0);
  };

  const authenticatePattern = async () => {
    if (clickCount !== 5) {
      // Display a toast notification if the user hasn't selected five nodes
      toast.error("Please select exactly five nodes to authenticate.");
      return;
    }

    try {
      // Send a POST request to the backend API with the selected pattern
      const response = await axios.post(patternMatchAPI, {
        pattern: selectedNodes,
        // pattern: [0, 5, 6, 7, 0],
      });
      console.log(selectedNodes);
      // Check if the API response indicates a successful pattern match
      if (response.data.isPatternMatched) {
        setIsAuthenticated(true);
        toast.success("Pattern Authentication Success");
        resetPattern();
        window.location.href = "/success/patternauth";
      } else {
        setIsAuthenticated(false);
        resetPattern();
        toast.error(`Pattern Authentication Failed `);
      }
    } catch (error) {
      // Handle API request error
      toast.error(`Error authenticating pattern ${error}`);
      resetPattern();
    }
  };

  return (
    <>
      <div className="flex justify-center items-center w-full max-h-[100vh] h-full">
        <div className="pattern-lock-container">
          <h2 className="my-10 text-2xl md:text-4xl font-semibold">
            Pattern Lock
          </h2>
          <div className="pattern-grid">
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className={`pattern-node flex justify-center items-center ${
                  selectedNodes.includes(index) ? "selected" : ""
                }`}
                onClick={() => handleNodeClick(index)}
              >
                {clickCount + 1}
              </div>
            ))}
          </div>
          <div className="flex-items-center justify-center space-x-10 my-10">
            <button onClick={resetPattern} className="">
              Reset
            </button>
            <button onClick={authenticatePattern}>Submit</button>
          </div>
          {isAuthenticated && <p>Pattern Authenticated!</p>}
        </div>
      </div>
    </>
  );
};

export default PatternLock;
