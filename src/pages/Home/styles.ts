import styled from "styled-components";
import {Link} from "react-router-dom";

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

export const H1 = styled.h1`
  font-size: 64px;
  color: var(--black);
`

export const H3 = styled.h3`
  font-size: 36px;
  color: var(--gray-3);
  margin: 1rem 0 1rem 0;
`

export const NavbarLink = styled(Link)`
  text-decoration: none;
`