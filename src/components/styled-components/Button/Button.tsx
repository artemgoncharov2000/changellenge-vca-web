import React, { FC } from "react";
import { cn } from '@bem-react/classname';
import './Button.scss';

const cnButton = cn('Button');

type PropsT = {
  label: string;
  disabled?: boolean;
  onClick: () => void
}

const Button: FC<PropsT> = ({
                              label,
                              disabled = false,
                              onClick,
}) => {

  return (
    <>
      <button disabled={disabled} className={cnButton()} onClick={onClick}>{label}</button>
    </>
  )
}

export default Button;