import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`
export const MiddleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
`

export const H2 = styled.h2`
  font-size: 64px;
  color: var(--black);
  font-size: 48px;
  line-height: 62px;
`

export const H5 = styled.h5`
  color: var(--gray-3);
  margin: 1rem 0 1rem 0;
  font-size: 24px;
  line-height: 31px;
  margin-bottom: 3rem;
`

export const BoxForm = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    margin-bottom: 2rem;
  }
`