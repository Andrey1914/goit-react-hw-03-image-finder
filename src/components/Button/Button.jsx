import PropTypes from 'prop-types';
import { Button } from './ButtonStyled';

export default function Button({ loadMore }) {
  return (
    <Button type="button" onClick={loadMore}>
      Load more
    </Button>
  );
}

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
