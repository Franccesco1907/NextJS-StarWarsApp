import { BoxProps } from "./BoxTypes";

const Box = ({ children, ...props }: BoxProps) => {
  return <div {...props}>{children}</div>;
}

export default Box;
