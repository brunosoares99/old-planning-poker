import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const VerticalLine = styled.div`
  border-left: 1px solid var(--gray);
  height: 75.06px;
  margin: 0 1.5rem 0 1.5rem;
`

export const Box = styled.div`
  display: flex;
  align-items: center;
`
export const PhotoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--purple);
  margin-right: 1rem;
`

export const Photo = styled.div`
`

export const TextPhoto = styled.h3`
  color: var(--white);
`
export const Name = styled.span`
  color: var(--gray-3);
  text-transform: uppercase;
`

export const ContainerModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 65px;
  & input {
    margin: 4rem 0 4rem 0;
  }
`

export const BoxTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  & h3 {
    margin-bottom: 1rem;
  }
`

export const H3 = styled.h3`
  font-size: 36px;
  line-height: 47px;
  color: var(--gray-3);
`

export const Paragraph = styled.p`
  color: var(--gray-3);
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
`