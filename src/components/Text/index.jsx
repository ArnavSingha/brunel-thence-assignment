import React from "react";

const sizes = {
  "5xl": "text-[63px] font-medium md:text-5xl",
  "6xl": "text-[64px] font-medium md:text-5xl",
  xs: "text-[15px] font-normal",
  lg: "text-xl font-medium",
  s: "text-base font-medium",
  "2xl": "text-[27px] font-medium md:text-[25px] sm:text-[23px]",
  "3xl": "text-[32px] font-normal md:text-3xl sm:text-[28px]",
  "4xl": "text-4xl font-normal md:text-[34px] sm:text-[32px]",
  xl: "text-[22px] font-medium",
  md: "text-lg font-medium",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-900_02 font-manrope ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
