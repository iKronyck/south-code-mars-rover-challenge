import { HTMLInputTypeAttribute } from "react";

type TInput = {
  label: string;
  value: string | number;
  name: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
};
export default function Input({
  name,
  label,
  value,
  onChange,
  type = "text",
  placeholder,
}: TInput) {
  return (
    <div>
      <h2 className="text-lg">{`${label}:`}</h2>
      <input
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        type={type}
        className="mt-2 w-full border-0 bg-gray-100 rounded px-4 py-2 outline-none"
      />
    </div>
  );
}
