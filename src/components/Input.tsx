import { InputProps } from "@/utils/interface";

const Input: React.FC<InputProps> = ({ label, ...rest }) => {
  return (
    <div className="w-full h-full mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={rest.id}
      >
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        {...rest}
      />
    </div>
  );
};

export default Input;
