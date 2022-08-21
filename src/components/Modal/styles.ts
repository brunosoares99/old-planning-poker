import styled from "styled-components";
import Modal from "styled-react-modal";
import { CloseOutline } from 'styled-icons/evaicons-outline'


interface ModalProps {
  width: string;
  height: string;
}

export const ModalStyle = styled(Modal)<ModalProps>`
    width: ${props => props.width};
    height: ${props => props.height};
`;


export const ModalBody = styled.div`
    position: relative;
    background-color: white;
    border-radius: 24px;
`;

export const CloseIcon = styled(CloseOutline)`
    cursor: pointer;
    height: 40px;
    width: 40px;
    color: var(--gray-2);
    position: absolute;
    right: 5%;
    top: 5%;
`