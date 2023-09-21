"use client";

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@/components/common";

const BiometricLoginPage = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return (
    <>
      <div className="flex flex-col space-y-5 justify-center items-center h-screen">
        {!isAuthenticated && (
          <>
            <Button
              className="p-3 bg-slate-200 disabled:bg-slate-400 disabled:cursor-not-allowed rounded-2xl text-black"
              onClick={() => loginWithRedirect()}
            >
              Login with Biometric
            </Button>
          </>
        )}
        {isAuthenticated && (
          <>
            <Button
              onClick={() => logout()}
              className="p-3 bg-slate-200 disabled:bg-slate-400 disabled:cursor-not-allowed rounded-2xl text-black"
            >
              Login out
            </Button>
          </>
        )}
      </div>
    </>
  );
};

export default BiometricLoginPage;
