import { MouseEventHandler } from 'react';
import { ButtonLayout } from './styles';

interface IButtonProp {
  cssClasses?: string;
  width?: string;
  height?: string;
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<IButtonProp> = ({
  cssClasses,
  children,
  width = '100%',
  height = '100%',
  onClick
}) => {
  return (
    <ButtonLayout onClick={onClick} width={width} height={height} className={cssClasses}>
      {children}
    </ButtonLayout>
  )
};

export default Button;