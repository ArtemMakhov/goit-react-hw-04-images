import { Component } from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalWindow } from "./Modal.styled";
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
    static propTypes = {
        onClose: PropTypes.func.isRequired,
        url: PropTypes.string.isRequired,
    };
    
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }
    componentDidUpdate() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleClickBackdrop = e => {
        if (e.target === e.currentTarget) {
            this.props.onClose();
        }
    };

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    };

    render() {
        return createPortal(
            <Overlay onClick={this.handleClickBackdrop}>
                <ModalWindow>
                    <img src={this.props.url} alt="imege" />
                </ModalWindow>
            </Overlay>,
            modalRoot
        );
    }
}