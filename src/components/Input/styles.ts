import styled from "styled-components";

interface InputProps {
  width: string;
  height: string;
}

export const InputStyle = styled.input<InputProps>`
    width: ${props => props.width};
    height: ${props => props.height};
    color: var(--gray-3);
    font-weight: 500;
    font-size: 24px;
    line-height: 31px;
    border: 1px solid var(--gray);
    border-radius: 8px;
    padding: 8px 24px;
    &::placeholder {
      color: var(--gray);
    }
  `
