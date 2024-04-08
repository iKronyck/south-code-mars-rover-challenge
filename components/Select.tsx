type TSelect = {
  options: string[];
  label: string;
  value: string | number;
  name: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export default function Select({
  options,
  name,
  value,
  label,
  onChange,
  placeholder = "Select a option",
}: TSelect) {
  return (
    <div>
      <h2 className="text-lg">{`${label}:`}</h2>
      <select
        name={name}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full border-0 bg-gray-100 rounded px-4 py-2 outline-none"
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  );
}
