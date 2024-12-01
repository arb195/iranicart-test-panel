import { SelectPropsType } from "@/types/inputType";
import { forwardRef } from "react";

const Select = forwardRef<HTMLSelectElement, SelectPropsType>(
  ({ options, id, ...props }, ref) => {
    return (
      <select id={id} ref={ref} className="font-normal p-3" {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }
);

Select.displayName = "Select";
export default Select;
