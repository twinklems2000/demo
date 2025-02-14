import { FC } from "react";
import "./button.css";

// interface for Button component

interface IButton {
  title?: any;
  handleClick?: any;
}
const Button: FC<IButton> = ({ title, handleClick }) => {
  return (
    <button className="buttonStyle" onClick={handleClick}>
      {title}
    </button>
  );
};

export default Button;
