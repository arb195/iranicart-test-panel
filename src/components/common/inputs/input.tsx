import { forwardRef } from "react";

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
        className="mt-1 block w-full border-none text-black bg-gray-100 h-11 rounded-xl shadow-lg duration-300	 hover:bg-gray-200 focus:bg-gray-100  px-2"
        ref={ref}
        {...other}
      />
    );
  }
);

export default Input;
