import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Element, Image } from './ImageGalleryItemStyled';

export default class ImageGalleryItem extends Component {
  openModal = event => {
    this.props.getModalURL(event.currentTarget.dataset.url);
    this.props.onToggleModal();
  };

  render() {
    return this.props.hits.map(({ id, webformatURL, largeImageURL }) => {
      return (
        <Element key={id}>
          <Image
            src={webformatURL}
            alt=""
            data-url={largeImageURL}
            onClick={this.openModal}
          />
        </Element>
      );
    });
  }
}

ImageGalleryItem.propTypes = {
  hits: PropTypes.arrayOf(
    PropTypes.shape({
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
  onToggleModal: PropTypes.func.isRequired,
  getModalURL: PropTypes.func.isRequired,
};
