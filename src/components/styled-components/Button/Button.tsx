import React, { FC, forwardRef } from "react";
import { cn } from '@bem-react/classname';
import './Button.scss';

const cnButton = cn('Button');

type PropsT = {
  label: string;
  disabled?: boolean;
  backgroundColor?: string;
  textColor?: string;
  type?: 'submit'
  onClick?: () => void;
}


const Button = forwardRef<HTMLButtonElement, PropsT>((props, ref) => {

    const {
        label,
        disabled = false,
        backgroundColor= "black",
        textColor = "white",
        onClick,
        type,
        ...rest
    } = props

  return (
      <button
          ref={ref}
          className={cnButton({
              backgroundColor: backgroundColor,
              textColor: textColor,
          })}
          disabled={disabled}
          onClick={onClick}
          type={type}
          {...rest}
      >
          {label}
      </button>
  )
})

export default Button;