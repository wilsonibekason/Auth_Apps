import * as React from "react";
import tw from "tailwind-styled-components";
import { Paragraph } from "@/components/common";

interface ErrorMessageProps {
  children: React.ReactNode;
}
const ErrorMessage: React.FC<ErrorMessageProps> = ({ children }) => {
  const ErrorMessageStyles = {
    Span: tw.span`text-xs text-red-500 w-full items-start p-2 bg-blue-200 bg-opacity-10`,
  };
  return (
    <>
      <Paragraph>
        <ErrorMessageStyles.Span>{children}</ErrorMessageStyles.Span>
      </Paragraph>
    </>
  );
};
export default ErrorMessage;
