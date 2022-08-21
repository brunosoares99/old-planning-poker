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