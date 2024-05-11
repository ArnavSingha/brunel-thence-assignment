import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-[38px]",
};
const variants = {
  outline: {
    gray_200_01: "border-gray-200_01 border border-solid text-gray-900_02",
    gray_400: "border-gray-400 border border-solid",
  },
  fill: {
    gray_300_63: "bg-gray-300_63",
  },
  gradient: {
    gray_900_02_gray_800: "bg-gradient text-white-A700",
  },
};
const sizes = {
  xs: "h-[52px] px-2.5",
  lg: "h-[88px] px-[35px] text-xl",
  sm: "h-[64px] px-4",
  md: "h-[77px] px-[35px] text-lg",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "gradient",
  size = "md",
  color = "gray_400",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "lg", "sm", "md"]),
  variant: PropTypes.oneOf(["outline", "fill", "gradient"]),
  color: PropTypes.oneOf(["gray_200_01", "gray_400", "gray_300_63", "gray_900_02_gray_800"]),
};

export { Button };
