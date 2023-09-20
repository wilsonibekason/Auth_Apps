import { forwardRef, ButtonHTMLAttributes } from "react";
import { ClassType } from "@/types/types";
import cx from "classnames";

type ButtonProps = ClassType & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { className } = props;
  return (
    <button ref={ref} {...props} className={cx(className, "font-raleway")} />
  );
});

Button.displayName = "Button";

export default Button;
