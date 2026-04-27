// Container.tsx
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "xl2" | "full";
  padding?: boolean;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth = "lg",
  padding = true,
  className = "",
}) => {
  const maxWidthClasses = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    xl: "max-w-screen-xl",
    xl2: "max-w-screen-2xl",
    full: "max-w-full",
  };

  return (
    <div
      className={`mx-auto ${maxWidthClasses[maxWidth]} ${padding ? "px-4 sm:px-6 lg:px-8" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
