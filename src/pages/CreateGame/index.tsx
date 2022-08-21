import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Select from '../../components/Select';

import { Container, MiddleBox,H2,H5,BoxForm } from './styles';


const CreateGame: React.FC = () => {

  return (
    <>
     <Header />  
      <Container>
        <MiddleBox>
          <H2>
            Criar um novo jogo
          </H2>
          <H5>
            Escolha um nome e o tipo de sistema de votação para o seu jogo
          </H5>
          <BoxForm>
            <Input type='text' placeholder='Nome do jogo' />
            <Select placeholder='Sistema de votação'>
              <option value="FIBONACCI">FIBONACCI ( 0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ?)</option>
              <option value="MODIFIED_FIBONACCI">MODIFIED FIBONACCI ( 0, 1/2, 1, 2, 3, 5, 8, 13, 20, 40, 100, ?)</option>
              <option value="POWERS_OF_TWO">POWERS OF 2 ( 0, 1, 2, 4, 8, 16, 32, 64, ?)</option>
            </Select>
          </BoxForm>
          <Button cssClasses="large-button">
              Criar Novo Jogo
          </Button>
        </MiddleBox> 
      </Container>
    </>   
  )
};

export default CreateGame;