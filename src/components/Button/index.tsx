import { ButtonLayout } from './styles';

interface IButtonProp {
  cssClasses?: string;
  children: React.ReactNode;
}

const Button: React.FC<IButtonProp> = ({
  cssClasses,
  children
}) => {
  return (
    <ButtonLayout className={cssClasses}>
      {children}
    </ButtonLayout>
  )
};

export default Button;