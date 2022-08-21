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
    <InputStyle defaultValue={placeholder}>
      <option value={placeholder} hidden>{placeholder}</option>
      {children}
    </InputStyle>
  )
};

export default Select;