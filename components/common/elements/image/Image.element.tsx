import { forwardRef, HTMLProps } from "react";
// import { Img } from 'react-image';
import cx from "classnames";
import { ClassType } from "@/types/types";

type ImageProps = HTMLProps<HTMLImageElement> & {
  src: string;
  alt: string;
};

const Image = forwardRef<HTMLImageElement, ImageProps & ClassType>(
  (props, ref) => {
    const { src, alt, className, ...rest } = props;

    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        {...rest}
        className={cx(className, "font-lato")}
      />
    );
  }
);
Image.displayName = "Image";

export default Image;
