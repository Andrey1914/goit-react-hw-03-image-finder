import PropTypes from 'prop-types';
import { Btn } from './ButtonStyled';

export default function Button({ loadMore }) {
  return (
    <Btn type="button" onClick={loadMore}>
      Load more
    </Btn>
  );
}

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
