import { forwardRef, HTMLProps } from "react";
import cx from "classnames";
import { ClassType } from "@/types/types";

type HeadingProps = ClassType &
  Omit<HTMLProps<HTMLHeadingElement>, "className">;

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
  const { className } = props;
  return (
    <h1 ref={ref} {...props} className={cx(className, "font-raleway")}></h1>
  );
});

Heading.displayName = "Heading";

export default Heading;
