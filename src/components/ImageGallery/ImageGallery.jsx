import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import { Box } from 'components/Box';
import getImages from 'services/API';

export default class ImageGallery extends Component {
  state = {
    hits: [],
    totalPage: null,
    loader: false,
    showModal: false,
    modalURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.props;
    const prevRequest = prevProps.request;
    const newRequest = this.props.request;

    if (prevRequest !== newRequest || page > prevProps.page) {
      this.setState({ loader: true });

      getImages(newRequest, { page })
        .then(data => {
          const { hits, totalHits, total } = data;
          if (total === 0) {
            toast.error('The search has not given any results');
            return;
          }

          if (page === 1) {
            this.setState({
              hits: hits,
              totalPage: Math.ceil(totalHits / 12),
            });
          } else {
            this.setState({
              hits: [...prevState.hits, ...data.hits],
            });
          }
        })
        .finally(() => this.setState({ loader: false }));
    }
  }

  getModalURL = URL => {
    this.setState({ modalURL: URL });
  };

  toggleModal = () => {
    this.setState(state => ({ showModal: !state.showModal }));
  };

  render() {
    const { hits, totalPage, loader, showModal, modalURL } = this.state;
    const { page, loadMore } = this.props;

    return (
      <>
        <div>
          <Box
            as="ul"
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            gridGap={4}
            mb={4}
          >
            <ImageGalleryItem
              hits={hits}
              onToggleModal={this.toggleModal}
              getModalURL={this.getModalURL}
            />
          </Box>
        </div>
        {loader && <Loader />}
        {totalPage > 1 && totalPage !== page && <Button loadMore={loadMore} />}
        {showModal && <Modal url={modalURL} onToggleModal={this.toggleModal} />}
      </>
    );
  }
}

ImageGallery.propTypes = {
  request: PropTypes.string.isRequired,
  loadMore: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};
