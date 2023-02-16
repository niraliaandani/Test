
    import React from "react";
    import PropTypes from 'prop-types';
    import { ErrorMessage } from "../../components/ErrorMessage";

    const variants = {"FillBlue100":"bg-blue_100","FillIndigo900":"bg-indigo_900","FillBlue500":"bg-blue_500","srcFillIndigo900":"bg-indigo_900"}
    const shapes = {"RoundedBorder5":"rounded-[5px]","srcRoundedBorder5":"rounded-[5px]"}
     const sizes = {"sm":"px-[9px] py-[10px]","md":"px-[14px] py-[15px]","lg":"p-[25px] sm:px-[20px]","xl":"p-[28px] sm:px-[20px]","2xl":"p-[31px] sm:px-[20px]","smSrc":"p-[14px]"}

    const Input = React.forwardRef(
      (
        {
          wrapClassName = "",
          className="",
          name,
          placeholder,
          type = "text",
          children,
          errors = [],
          label = "",
          prefix,
          suffix,
          shape,
          variant,
          size,
          ...restProps
        },
        ref
      ) => {

        return (
          <>
            <div className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant] || ""} 
              ${sizes[size] || ""}`
            }>
              {!!label && label}
              {!!prefix && prefix}
              <input
                ref={ref}
                className={`${className} bg-transparent border-0`}
                type={type}
                name={name}
                placeholder={placeholder}
                {...restProps}
              />
              {!!suffix && suffix}
            </div>
            {!!errors && <ErrorMessage errors={errors} />}
          </>
        );
      }
    );

    
    Input.propTypes = {
      wrapClassName :PropTypes.string,
      className: PropTypes.string,
      name:PropTypes.string,
      placeholder:PropTypes.string,
      type :PropTypes.string,
      shape : PropTypes.oneOf(["RoundedBorder5","srcRoundedBorder5"]),
      variant : PropTypes.oneOf(["FillBlue100","FillIndigo900","FillBlue500","srcFillIndigo900"]),
      size : PropTypes.oneOf(["sm","md","lg","xl","2xl","smSrc"]),
    };
  
    Input.defaultProps = {"wrapClassName":"","className":"","name":"","placeholder":"","type":"text","shape":"","variant":"","size":""};
    
    export { Input };
  