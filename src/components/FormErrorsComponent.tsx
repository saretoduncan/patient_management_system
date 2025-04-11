import React from "react";
type TFormErrosProp = {
  message?: string;
};
const FormErrorsComponent: React.FC<TFormErrosProp> = ({ message }) => {
  return (
    <>
      <small className="text-red-500">{message}</small>
    </>
  );
};

export default FormErrorsComponent;
