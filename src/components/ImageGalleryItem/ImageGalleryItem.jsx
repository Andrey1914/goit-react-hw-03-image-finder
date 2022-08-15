import PropTypes from 'prop-types';
import { Image } from './ImageGalleryItemStyled';
import { Box } from 'components/Box';

export default function ImageGalleryItem({
  getModalURL,
  onToggleModal,
  // hits,
  id,
  webformatURL,
  largeImageURL,
}) {
  const openModal = event => {
    getModalURL(event.currentTarget.dataset.url);
    onToggleModal();
  };

  // return hits.map(({ id, webformatURL, largeImageURL }) => {
  return (
    <Box
      key={id}
      as="li"
      width={350}
      contain="content"
      borderRadius="normal"
      boxShadow="0px 5px 10px 2px rgba(45, 90, 124, 0.2)"
    >
      <Image
        src={webformatURL}
        alt=""
        onClick={() => openModal(largeImageURL)}
      />
    </Box>
  );
  // });
}

// export default class ImageGalleryItem extends Component {
//   openModal = event => {
//     this.props.getModalURL(event.currentTarget.dataset.url);
//     this.props.onToggleModal();
//   };

//   render() {
//     return this.props.hits.map(({ id, webformatURL, largeImageURL }) => {
//       return (
//         <Box
//           key={id}
//           as="li"
//           width={350}
//           contain="content"
//           borderRadius="normal"
//           boxShadow="0px 5px 10px 2px rgba(45, 90, 124, 0.2)"
//         >
//           <Image
//             src={webformatURL}
//             alt=""
//             data-url={largeImageURL}
//             onClick={this.openModal}
//           />
//         </Box>
//       );
//     });
//   }
// }

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
