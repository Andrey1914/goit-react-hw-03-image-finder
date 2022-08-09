import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { BackDrop, ModalBoard } from './ModalStyled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    const backDrop = document.querySelector('#backDrop');
    window.addEventListener('keydown', this.closeModal);
    backDrop.addEventListener('click', this.closeModal);
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
      <BackDrop id="backDrop">
        <ModalBoard>
          <img src={this.props.url} alt="" />
        </ModalBoard>
      </BackDrop>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  onToggleModal: PropTypes.func.isRequired,
};
