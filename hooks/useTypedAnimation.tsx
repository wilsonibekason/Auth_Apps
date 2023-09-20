"use client";

import React, { useState, useEffect } from "react";

interface TypedAnimationProps {
  text: string;
  typingSpeed: number;
}

const TypingAnimation: React.FC<TypedAnimationProps> = ({
  text,
  typingSpeed,
}) => {
  const [displayText, setDisplayText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, text, typingSpeed]);

  return <div>{displayText}</div>;
};

export default TypingAnimation;
