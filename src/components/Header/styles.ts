import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyle = styled.header`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`

export const Image = styled.img`
  padding: 1rem;
`

export const NavbarLink = styled(Link)`
  text-decoration: none;
`