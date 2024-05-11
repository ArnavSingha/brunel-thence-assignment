import React from "react";

const sizes = {
  xl: "text-6xl font-semibold md:text-[52px] sm:text-[46px]",
  s: "text-2xl font-bold md:text-[22px]",
  md: "text-[40px] font-semibold md:text-[38px] sm:text-4xl",
  xs: "text-xl font-semibold",
  lg: "text-[56px] font-semibold md:text-5xl sm:text-[42px]",
};

const Heading = ({ children, className = "", size = "lg", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900_02 font-manrope ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
