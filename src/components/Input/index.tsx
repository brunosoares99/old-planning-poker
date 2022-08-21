import { InputStyle } from "./styles";

interface props {
  type: string;
  placeholder: string;
}

const Input: React.FC<props> = ({
  type,
  placeholder
}) => {
  return (
    <InputStyle type={type} placeholder={placeholder} />
  )
};

export default Input;