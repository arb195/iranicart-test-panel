export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder?: string;
}

export interface SelectPropsType
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string }[];
  id: string;
}

export interface TextAreaPropsType
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
