import { forwardRef, HTMLProps } from "react";
import cx from "classnames";
import { ClassType } from "@/types/types";

type OtherProps = ClassType & { children: React.ReactNode };
type AnchorProps = OtherProps & HTMLProps<HTMLAnchorElement>;

const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>((props, ref) => {
  const { className, children } = props;
  return (
    <a ref={ref} {...props} className={cx(className, "font-raleway")}>
      {children}{" "}
    </a>
  );
});

Anchor.displayName = "Anchor";

export default Anchor;
