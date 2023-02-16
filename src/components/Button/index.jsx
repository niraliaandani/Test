
    import React from "react";
    import PropTypes from 'prop-types';
    

    const shapes = {"RoundedBorder22":"rounded-[22px]","CustomBorderBL5":"rounded-bl-[5px] rounded-br-[5px] rounded-tl-[0] rounded-tr-[0]"}
    const variants = {"FillBlue100":"bg-blue_100 text-indigo_900","FillIndigo900":"bg-indigo_900 text-blue_100"}
     const sizes = {"sm":"p-[13px]"}

    const Button = ({
      children,
      className = '',
      leftIcon,
      rightIcon,
      shape,
      variant,
      size,
      ...restProps
    }) => {

      return (
        <button className={`${className} ${shape && shapes[shape] || ""} ${size && sizes[size] || ""} ${variant && variants[variant] || ""}`}
          {...restProps}>
          {!!leftIcon && leftIcon}
          {children}
          {!!rightIcon && rightIcon}
        </button>
      );
    };

    
    Button.propTypes = {
      className: PropTypes.string,
      children:PropTypes.node,
      shape : PropTypes.oneOf(["RoundedBorder22","CustomBorderBL5"]),
      variant : PropTypes.oneOf(["FillBlue100","FillIndigo900"]),
      size : PropTypes.oneOf(["sm"]),
    };  
  

    Button.defaultProps = {"className":"","shape":"RoundedBorder22","variant":"FillBlue100","size":"sm"};
    export { Button };
  