"use client";

import { Heading } from "@/components/common";
import React from "react";

const BiometricAuthSuccessPage = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full h-screen">
        <Heading className="text-2xl md:text-5xl tracking-tight leading-loose text-center">
          Congratulations, You have successfully logged In With&nbsp;
          <span className="text-slate-700 font-bold">
            Biometric Auth Method
          </span>
        </Heading>
      </div>
    </>
  );
};

export default BiometricAuthSuccessPage;
