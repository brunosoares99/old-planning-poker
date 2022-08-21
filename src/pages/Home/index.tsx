import Header from '../../components/Header';
import Button from '../../components/Button';

import { Container, MiddleBox,H1,H3, NavbarLink } from './styles';


const Home: React.FC = () => {
  
  return (
      <Container>
        <Header />  
        <MiddleBox>
          <H1>
            Scrum Poker
          </H1>
          <H3>
            para times de desenvolvimento ágil
          </H3>
          <NavbarLink to="/create-game">
            <Button cssClasses="large-button">
              Iniciar Novo Jogo
            </Button>
          </NavbarLink>
          
        </MiddleBox> 
      </Container>
  )
};

export default Home;