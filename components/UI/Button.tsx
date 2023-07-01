import React from "react";
interface ButtonProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  classes?: string;
  disable?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  children,
  disable = false,
  classes = "",
  onClick,
}) => {
  return (
    <button
      className={`text-white uppercase text-[1rem] font-bold leading-relaxed tracking-widest break-words font-spaceGrotesk pb-[10px] border-b-[2px] border-b-green hover:text-green transition-colors ${classes}`}
      onClick={onClick}
      disabled={disable}
    >
      {children}
    </button>
  );
};

export default Button;
