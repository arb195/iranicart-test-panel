import React, { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, placeholder, ...other }, ref) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 px-2"
        ref={ref}
        {...other}
      />
    );
  }
);

export default Input;
