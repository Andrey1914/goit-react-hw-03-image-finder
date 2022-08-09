import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from './ImageGalleryItemStyled';
import { Box } from 'components/Box';

export default class ImageGalleryItem extends Component {
  openModal = event => {
    this.props.getModalURL(event.currentTarget.dataset.url);
    this.props.onToggleModal();
  };

  render() {
    return this.props.hits.map(({ id, webformatURL, largeImageURL }) => {
      return (
        <Box
          key={id}
          as="li"
          width={350}
          contain="content"
          borderRadius="normal"
          border="normal #000"
        >
          <Image
            src={webformatURL}
            alt=""
            data-url={largeImageURL}
            onClick={this.openModal}
          />
        </Box>
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
