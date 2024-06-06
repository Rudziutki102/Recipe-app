import { withChildrenAndClassProps } from "@/types/common-types";

const Container = ({ children, className }: withChildrenAndClassProps) => {
  return (
    <div
      className={`container max-w-screen-2xl mt-20 ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
