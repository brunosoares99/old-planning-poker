import { InputStyle } from "./styles";

interface props {
  placeholder: string;
  children: React.ReactNode;
}

const Select: React.FC<props> = ({
  placeholder,
  children
}) => {
  return (
    <InputStyle placeholder={placeholder}>
      <option value="" selected hidden>{placeholder}</option>
      {children}
    </InputStyle>
  )
};

export default Select;