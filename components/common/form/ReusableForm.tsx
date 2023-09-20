import React from "react";
import { FormikHelpers, useFormik } from "formik";
// import ErrorMessage from "@/components/common/form/ErrorMessage.tsx";
import { Button, ErrorMessage, Paragraph } from "@/components/common/";
import cx from "classnames";
import { FormField } from "@/types/types";
import { Input } from "@/components/common";
import { IconType } from "react-icons";
import tw from "tailwind-styled-components";
interface FormProps<Values> {
  fields: FormField;
  initialValues: { [key: string]: string };
  onSubmit: (
    values: Values,
    formikHelpers: FormikHelpers<Values>
  ) => void | Promise<void>;
  submitButtonText: string;
  submitButtonDisabled?: boolean;
  showLabel?: boolean;
  children?: React.ReactNode;
  formChildren?: React.ReactNode;
  showIcon?: React.ReactNode | IconType;
  hideIcon?: React.ReactNode | IconType;
  showPwdToggle?(): void;
  showPwd?: boolean;
  showIconStyle?: string;
  LayoutStyle?: string;
  fieldDataIndex?: number;
  OtherFormStyle?: string;
}
const ReusableForm: React.FC<FormProps<any>> = ({
  fields,
  initialValues,
  onSubmit,
  submitButtonText,
  // submitButtonDisabled = true,
  showLabel,
  children,
  formChildren,
  showPwdToggle,
  showPwd,
  showIcon: ShowIcon,
  hideIcon: HideIcon,
  showIconStyle,
  LayoutStyle,
  fieldDataIndex,
  OtherFormStyle,
}) => {
  const formik = useFormik({
    initialValues,
    validationSchema: fields.validation,
    onSubmit,
  });
  // const formik = React.useMemo(() => {
  //   // eslint-disable-next-line react-hooks/rules-of-hooks
  //   return useFormik({
  //     initialValues,
  //     validationSchema: fields.validation,
  //     onSubmit,
  //   });
  // }, []);
  const CheckPwdType = showPwd ? "text" : "password";
  const fieldRadio = fields.data[fieldDataIndex as number]?.type === "checkbox";
  const radioFields = fields.data.filter((field) => field.type === "checkbox");
  const nonRadioFields = fields.data.filter(
    (field) => field.type !== "checkbox"
  );
  console.log("Radio Fields", radioFields);

  const ReusableFormStyles = {
    Layout: tw.section``,
  };
  const { Layout } = ReusableFormStyles;
  return (
    <>
      <Layout className={cx(LayoutStyle)}>
        <form
          onSubmit={formik.handleSubmit}
          className={cx(
            fieldRadio === undefined ? fields.FormStyles : fields.FormStyles
          )}
        >
          {/* <>{formChildren}</>  */}
          {nonRadioFields.map((field) => (
            <>
              <div
                key={field.name}
                className={cx(
                  "w-full flex items-center relative",
                  OtherFormStyle
                )}
              >
                <label
                  htmlFor={field.name}
                  className={cx(
                    field.type !== "checkbox" && !showLabel && "hidden"
                  )}
                >
                  {field.label}
                </label>
                <input
                  key={field.name}
                  type={field.type === "password" ? CheckPwdType : field.type}
                  id={field.name}
                  placeholder={field.placeholder}
                  {...formik.getFieldProps(field.name)}
                  className={cx(fields.InputStyles, "relative")}
                />

                {field.type === "password" && (
                  <div className={cx(showIconStyle)}>
                    {showPwd ? (
                      typeof ShowIcon === "function" ? (
                        <ShowIcon
                          className={cx("cursor-pointer")}
                          size={15}
                          onClick={showPwdToggle}
                        />
                      ) : (
                        ShowIcon
                      )
                    ) : typeof HideIcon === "function" ? (
                      <HideIcon
                        className={cx("cursor-pointer")}
                        size={15}
                        onClick={showPwdToggle}
                      />
                    ) : (
                      HideIcon
                    )}
                  </div>
                )}
              </div>
              {formik.touched[field.name] && formik.errors[field.name] && (
                <ErrorMessage>{formik.errors[field.name]}</ErrorMessage>
              )}
            </>
          ))}
          {/*  */}
          <>{formChildren}</>
          {/*  */}
          {radioFields.length > 0 && radioFields[0].type === "checkbox" && (
            <>
              <div className="flexcenter gap-x-2">
                <Paragraph className="w-10 md:w-20 h-[1px] bg-slate-500" />
                <Paragraph className="text-xs">
                  Select Your Field Below
                </Paragraph>
                <Paragraph className="w-10 md:w-20 h-[1px] bg-slate-500" />
              </div>
              <div className={cx(fields.radioStyles)}>
                {radioFields.map((field) => (
                  <div
                    key={field.name}
                    className={cx("w-full flex items-center gap-x-2 relative")}
                  >
                    <input
                      key={field.name}
                      type={
                        field.type === "checkbox"
                          ? "checkbox"
                          : CheckPwdType || field.type
                      }
                      id={field.name}
                      placeholder={field.placeholder}
                      {...formik.getFieldProps(field.name)}
                      className={cx("bg-red-400")}
                    />
                    {field.type === "checkbox" && (
                      <label htmlFor={field.name} className={cx("capitalize")}>
                        {field.label}
                      </label>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

          <Button type="submit" className={cx(fields.ButtonStyles, "")}>
            {submitButtonText}
          </Button>
        </form>
      </Layout>
      {children}
    </>
  );
};

export default ReusableForm;
