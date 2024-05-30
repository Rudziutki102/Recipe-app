import { ContainerProps } from "@/types/common-types";

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`container max-w-screen-2xl ${className && className}`}>
      {children}
    </div>
  );
};

export default Container;
