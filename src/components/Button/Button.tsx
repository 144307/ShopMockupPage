import { useEffect } from "react";
import "./Button.less";

// 1. Название передаваемое как параметр
// 2. Возможность быть как прямоугольной, так и квадратной.
// 3. Два цвета на выбор
// 4. Функция передаваемая через props

interface Props {
  label: string;
  className?: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

Button.defaultProps = {
  style: "rectangle",
};

function Button({
  label: label,
  className: className,
  onClick: onClick,
}: Props) {
  useEffect(() => {}, []);

  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
