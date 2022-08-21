import styled from "styled-components";

export const InputStyle = styled.input`
    color: var(--gray-3);
    font-weight: 500;
    font-size: 24px;
    line-height: 31px;
    border: 1px solid var(--gray);
    border-radius: 8px;
    padding: 8px 24px;
    width: 768px;
    height: 64px;
    &::placeholder {
      color: var(--gray);
    }
  `
