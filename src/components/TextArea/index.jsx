
    import React from "react";
    import PropTypes from 'prop-types';
    import { ErrorMessage } from "../../components/ErrorMessage";

    const variants = {"FillIndigo900":"bg-indigo_900 border-[0]"}
    
     const sizes = {"sm":"pb-[35px] pt-[18px] px-[18px]"}

    const TextArea = React.forwardRef(
      (
        { 
          className, 
          name, 
          placeholder, 
          children,
          
          variant, 
          size, 
          errors, 
          ...restProps 
        },
        ref
      ) => {
        return (
          <>
            <textarea
              ref={ref}
              className={`${className} ${sizes[size] || ""} ${variants[variant] || ""}`}
              name={name}
              placeholder={placeholder}
              {...restProps}
            />
            {!!errors && <ErrorMessage errors={errors} />}

            {children}
          </>
        );
      }
    );

    
    TextArea.propTypes = {
      className: PropTypes.string,
      name: PropTypes.string,
      placeholder: PropTypes.string, 
      
      variant : PropTypes.oneOf(["FillIndigo900"]),
      size : PropTypes.oneOf(["sm"]),
    } 
  

    TextArea.defaultProps = {"className":"","name":"","placeholder":"","variant":"FillIndigo900","size":"sm"};
    export { TextArea };
  