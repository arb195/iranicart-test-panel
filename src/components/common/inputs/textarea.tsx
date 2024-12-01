import { TextAreaPropsType } from "@/types/inputType";
import { forwardRef } from "react";

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaPropsType>(
  (props, ref) => {
    return (
      <textarea ref={ref} className="p-2 rounded font-normal" {...props} />
    );
  }
);

TextArea.displayName = "TextArea";
export default TextArea;
