import styled from "styled-components";

interface ButtonProps {
  width: string;
  height: string;
}

export const ButtonLayout = styled.button<ButtonProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  cursor: pointer;
  background-color: var(--purple-3);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;

  &.middle-button {
    width: 208px;
    height: 57px;
    border-radius: 19px;
    font-size: 18px;    
  }

  &.large-button {
    height: 71px;
    width: 523px;
    border-radius: 19px;
    padding: 12px, 134px, 12px, 134px;
    font-size: 36px;
  }
`