import { Image } from './ImageGalleryItemStyled';
import { Box } from 'components/Box';

export default function ImageGalleryItem({
  onToggleModal,
  webformatURL,
  largeImageURL,
}) {
  return (
    <Box
      as="li"
      width={350}
      contain="content"
      borderRadius="normal"
      boxShadow="0px 5px 10px 2px rgba(45, 90, 124, 0.2)"
    >
      <Image
        src={webformatURL}
        alt=""
        onClick={() => onToggleModal(largeImageURL)}
      />
    </Box>
  );
}
