import ProfileBox from "../ProfileBox";
import { HeaderStyle, Image, NavbarLink } from "./styles";
import Logo from '../../assets/logo.svg'

const Header: React.FC = () => {
  return (
    <HeaderStyle>
      <NavbarLink to="/">
        <Image src={Logo} />
      </NavbarLink>
      <ProfileBox />
    </HeaderStyle>
  )
};

export default Header;