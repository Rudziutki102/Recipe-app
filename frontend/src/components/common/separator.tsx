import { withChildrenAndClassProps } from "@/types/common-types";

const Separator = ({ children, className }: withChildrenAndClassProps) => {
  return (
    <div
      className={`text-5xl my-10 p-10 border-b-2 uppercase text-center ${className}`}
    >
      {children}
    </div>
  );
};

export default Separator;
