import { InputStyle } from "./styles";

interface props {
  type: string;
  placeholder: string;
  width?: string;
  height?: string;
}

const Input: React.FC<props> = ({
  type,
  placeholder,
  width = "768px",
  height = "64px",
}) => {
  return (
    <InputStyle width={width} height={height} type={type} placeholder={placeholder} />
  )
};

export default Input;