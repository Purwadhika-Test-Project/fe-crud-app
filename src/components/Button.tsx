import { ButtonProps } from "@/utils/interface";

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button
      className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
