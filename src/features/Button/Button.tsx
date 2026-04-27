interface ButtonProps {
  typeBtn: "primary" | "secondary";
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  img?: string;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  typeBtn = "primary",
  type,
  onClick,
  children,
  img,
  className,
}) => {
  return (
    <button
      type={type}
      className={`cursor-pointer tranisition-all duration-300 ease-in-out hover:scale-110 hover:brightness-150 ${className} ${typeBtn == "primary" ? "rounded-4xl font-medium text-[18px] leading-6 tracking-wide bg-btnColor text-btnText px-7 py-3 flex justify-center items-center gap-4 " : "rounded-4xl font-bold text-2xl leading-6 tracking-wide bg-btnColor text-btnText px-8 py-6 flex justify-center items-center gap-6"}`}
      onClick={onClick}
    >
      <span>{children}</span>
      <img src={img} alt="" />
    </button>
  );
};

export default Button;
