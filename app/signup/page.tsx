"use client";

import { FormField, InitialValuesType, OtherFormTypes } from "@/types/types";
import tw from "tailwind-styled-components";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import { Heading, Paragraph, ReusableForm } from "@/components/common";
import Link from "next/link";
import axios from "@/utils/baseUrl";

const FormChildren = () => {
  return (
    <>
      <div className="flex justify-between text-white font-medium w-full text-xs">
        <Link
          href="/login"
          className="hover:text-slate-100 transition duration-500"
        >
          Already a user? Login
        </Link>
        <Link href="/" className="hover:text-slate-100 transition duration-500">
          Return to home
        </Link>
      </div>
    </>
  );
};

const SignUpScreen = () => {
  const initialValues: InitialValuesType = {
    email: "",
    password: "",
    username: "",
  };

  const fields: FormField = {
    data: [
      {
        name: "username",
        type: "username",
        label: "Username",
        placeholder: "Enter your Username",
      },
      {
        name: "email",
        type: "email",
        label: "Email",
        placeholder: "Enter your Email",
      },
      {
        name: "password",
        type: "password",
        label: "Password",
        placeholder: "Enter your Password",
      },
    ],
    validation: Yup.object().shape({
      email: Yup.string()
        .email("Invalid email")
        .required("please add your email address"),
      username: Yup.string().required("please add your Username"),
      password: Yup.string().required("Please enter your Password"),
    }),
    ButtonStyles:
      "w-full max-w-[80%] md:max-w-[40%] py-3 px-6 border-2 rounded-3xl mt-2 transition duration-500 ease-in-out text-white hover:text-opacity-80 hover:bg-opacity-60 focus:outline-none focus:border-slate-300 mb-2",
    InputStyles:
      "max-w-full w-full p-4 rounded-3xl placeholder:text-sm placeholder:font-medium focused:border-none focused:outline-none outline-none focused-within:outline-none text-black",
    FormStyles:
      "flex flex-col gap-y-5 w-[250px] max-w-full md:w-[400px] items-center ",
  };

  const handleSubmit: OtherFormTypes<InitialValuesType>["OnSubmit"] = (
    values,
    formikHelpers
  ) => {
    // Handle form subscription here
    axios
      .post("/signup", values)
      .then(() => {
        formikHelpers?.resetForm();
        toast.success("Registration Successful");
        console.log("Submitted values:", values);
        // router.push("/login");
        window.location.href = "/login";
      })
      .catch((err) => toast.error("Failed Request"));
    formikHelpers.resetForm();
    // navigate("/auth/resetpassword");
  };

  const SignUpScreenStyles = {
    Layout: tw.section`w-full`,
    Center: tw.div`flex flex-col gap-y-5 items-center justify-center w-full py-40`,
  };
  const { Layout, Center } = SignUpScreenStyles;
  return (
    <>
      <Layout>
        <Center>
          <Heading className="text-2xl md:text-5xl tracking-wide font-semibold text-white">
            Registration
          </Heading>
          <div className="flex items-center justify-center gap-x-2">
            <Paragraph className="w-5 md:w-20 h-[1px] bg-slate-500" />
            <Paragraph className="text-xs ">
              Enter your Email, Username, and password
            </Paragraph>
            <Paragraph className="w-5 md:w-20 h-[1px] bg-slate-500" />
          </div>
          <ReusableForm
            fields={fields}
            initialValues={initialValues}
            onSubmit={handleSubmit}
            formChildren={<FormChildren />}
            submitButtonText="Submit"
          ></ReusableForm>
        </Center>
      </Layout>
    </>
  );
};

export default SignUpScreen;
