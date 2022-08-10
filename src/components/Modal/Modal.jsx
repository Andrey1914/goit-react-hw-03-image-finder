import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Backdrop, ModalBoard } from './ModalStyled';

const modalRoot = document.querySelector('#root');

export default class Modal extends Component {
  componentDidMount() {
    const backdrop = document.querySelector('#backdrop');
    window.addEventListener('keydown', this.closeModal);
    backdrop.addEventListener('click', this.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }

  closeModal = event => {
    if (event.code === 'Escape' || event.target === event.currentTarget) {
      this.props.onToggleModal();
    }
  };

  render() {
    return createPortal(
      <Backdrop id="backdrop">
        <ModalBoard>
          <img src={this.props.url} alt="" />
        </ModalBoard>
      </Backdrop>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  onToggleModal: PropTypes.func.isRequired,
};
