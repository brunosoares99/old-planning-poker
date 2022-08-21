import Button from "../Button"
import { 
  Container,
  VerticalLine,
  Box,
  Photo,
  TextPhoto,
  PhotoBox,
  Name,
 } from "./styles";

const ProfileBox: React.FC = () => {
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
      <Button cssClasses="middle-button">
        Juntar-se
      </Button>
    </Container>
  )
};

export default ProfileBox;