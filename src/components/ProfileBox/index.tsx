import { useState } from "react";
import Button from "../Button"
import Input from "../Input";
import Modal from "../Modal";
import { 
  Container,
  VerticalLine,
  Box,
  Photo,
  TextPhoto,
  PhotoBox,
  Name,
  ContainerModal,
  H3,
  Paragraph,
  BoxTitle
 } from "./styles";

const ProfileBox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal(event: any) {
    setIsOpen(!isOpen);
  }
  return (
    <Container>
      <Box>
        <PhotoBox>
          <Photo>
          </Photo>
          <TextPhoto>
            T
          </TextPhoto>
        </PhotoBox>
        <Name className="l-font bold">
          Talita
        </Name>
      </Box>
      
      <VerticalLine />
      <Button onClick={toggleModal} cssClasses="middle-button">
        Juntar-se
      </Button>
      <Modal isOpen={isOpen} toggleModal={toggleModal}>
        <ContainerModal>
          <BoxTitle>
            <H3>Entrar com um código</H3>
            <Paragraph>
              Para acessar um jogo existente, é necessário inserir o código de acesso.
            </Paragraph>
          </BoxTitle>
          
          <Input type='text' width='504px' height='64px' placeholder='Digite o código para acessar o jogo' />
          <Button width='504px' height='64px' cssClasses="large-button">
            Entrar no jogo
          </Button>
        </ContainerModal>
      </Modal>
    </Container>
  )
};

export default ProfileBox;