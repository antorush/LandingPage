interface TitleProps {
  subtitle: string;
  title: string;
  description: string;
  isDark?: boolean;
  className?: string;
  position?: "text-left" | "text-center" | "text-right";
}

const Title: React.FC<TitleProps> = ({
  subtitle,
  title,
  description,
  className,
  position = "text-center",
  isDark = false,
}) => {
  return (
    <div className={`w-full ${position} ${className}`}>
      <p
        className={`font-medium text-xl leading-[110%] ${isDark ? "text-amber-300" : "text-amber-500"}`}
      >
        {subtitle}
      </p>
      <h2
        className={`mt-2 mb-6 ${isDark ? "text-white" : "text-blueGray-900"} text-h2 leading-[110%] font-bold`}
      >
        {title}
      </h2>
      <p
        className={`font-medium text-xl leading-[180%] ${isDark ? "text-white" : "text-blueGray-900"}`}
      >
        {description}
      </p>
    </div>
  );
};

export default Title;
