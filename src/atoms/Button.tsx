//Boostrap
import { Button as BsButton, Spinner } from "react-bootstrap";

//styles
import classes from "@/styles/atoms/button.module.scss";

//types
import { FC } from "react";
import { ButtonProps as BsButtonProps } from "react-bootstrap/Button";

interface ButtonProps extends BsButtonProps {
  loading?: boolean;
}

export const Button: FC<ButtonProps> = ({
  loading,
  children,
  className = "",
  variant = "primary",
  ...props
}) => {
  return (
    <BsButton
      {...props}
      disabled={loading}
      className={`${className} ${classes[`button_${variant}`]}`}
    >
      {loading ? <Spinner animation="border" /> : children}
    </BsButton>
  );
};
