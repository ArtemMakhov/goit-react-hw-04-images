import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalWindow } from "./Modal.styled";
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export const  Modal = ({onClose, url }) =>  {

    useEffect(() => {
    const handleKeyDown = e => {
        if (e.code === 'Escape') {
            onClose();
        }
        };
        
      window.addEventListener('keydown', handleKeyDown);  
    },[onClose])


    const handleClickBackdrop = e => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

        return createPortal(
            <Overlay onClick={handleClickBackdrop}>
                <ModalWindow>
                    <img src={url} alt="imege" />
                </ModalWindow>
            </Overlay>,
            modalRoot
        );
}


Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired,
    }