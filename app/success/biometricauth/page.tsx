"use client";

import { Heading, Paragraph } from "@/components/common";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Image from "next/image";
import { User } from "@/types/types";

const BiometricAuthSuccessPage = () => {
  const { user, isAuthenticated, error, isLoading } = useAuth0();
  return (
    <>
      <div className="flex justify-center items-center w-full h-screen">
        {error && <Paragraph>Authentication Error</Paragraph>}
        {isLoading ? (
          <Heading as={"h1"} size={3}>
            Loading...
          </Heading>
        ) : null}
        {!error && !isLoading && (
          <>
            <Heading className="text-2xl md:text-5xl tracking-tight leading-loose text-center">
              Congratulations, You have successfully logged In With&nbsp;
              <span className="text-slate-700 font-bold">
                Biometric Auth Method
              </span>
            </Heading>
            {isAuthenticated && (
              <>
                <article>{JSON.stringify(user, null, 2)}</article>
                {user?.picture && (
                  <Image
                    src={user.picture}
                    alt={user?.name as string}
                    width={100}
                    height={100}
                    className="w-20 h-20 rounded-full object-cover "
                  />
                )}
                <Heading className="text-2xl md:text-5xl tracking-tight leading-loose text-center">
                  {user?.name}
                </Heading>

                <ul>
                  {user &&
                    Object.keys(user as User).map((objKey, i) => (
                      <>
                        <li key={i}>
                          {objKey}: {user[objKey]}{" "}
                        </li>
                      </>
                    ))}
                </ul>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default BiometricAuthSuccessPage;
