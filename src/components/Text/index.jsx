
    import React from "react";

    const variantClasses = {"h1":"font-normal sm:text-[38px] md:text-[44px] text-[48px]","h2":"font-normal sm:text-[32px] md:text-[34px] text-[36px]","h3":"font-normal sm:text-[28px] md:text-[30px] text-[32px]","h4":"font-normal sm:text-[24px] md:text-[26px] text-[28px]","h5":"font-medium sm:text-[22px] md:text-[24px] text-[26px]","h6":"font-normal sm:text-[18px] md:text-[20px] text-[22px]","body1":"text-[18px]","body2":"text-[16px]","body3":"text-[14px]","body4":"font-normal text-[12px]"}

    const Text = ({ children, className, variant, as, ...restProps }) => {
    const Component = as || "span"
      return (
        <Component className={`${className} ${variant && variantClasses[variant]}`} {...restProps}>
          {children}
        </Component>
      );
    }

    export { Text };
  