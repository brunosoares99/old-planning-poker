import { ModalStyle, ModalBody, CloseIcon } from "./styles";


interface Props {
  isOpen: boolean,
  toggleModal: any,
  children: React.ReactNode,
  width?: string,
  height?: string,
}

const Modal: React.FC<Props> = ({
  isOpen,
  toggleModal,
  width = "80%",
  height = "80%",
  children
}) => {
  return (
    <ModalStyle
    width={width}
    height={height}
    isOpen={isOpen}
    onEscapeKeydown={toggleModal}
    >
      <ModalBody>
        <CloseIcon onClick={toggleModal} />
        {children}
      </ModalBody>
    </ModalStyle>
  )
};

export default Modal;