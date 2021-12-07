import React, { FC } from "react";
import { cn } from '@bem-react/classname';
import './Button.scss';

const cnButton = cn('Button');

type PropsT = {
  label: string;
  disabled?: boolean;
  backgroundColor?: string;
  textColor?: string;
  onClick: () => void;
}

const Button: FC<PropsT> = ({
  label,
  disabled = false,
  backgroundColor= "black",
  textColor = "white",
  onClick,
}) => {

  return (
    <>
      <button
        className={cnButton({
          backgroundColor: backgroundColor,
          textColor: textColor,
        })}
        disabled={disabled}
        onClick={onClick}>{label}
      </button>
    </>
  )
}

export default Button;