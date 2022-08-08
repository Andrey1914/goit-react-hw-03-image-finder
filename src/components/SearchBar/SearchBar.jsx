import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { FcSearch } from 'react-icons/fc';
import { Box } from 'components/Box';
import { Form, Input } from './SearchBarStyled';
import { Btn } from 'components/Button/ButtonStyled';

export default class SearchBar extends Component {
  state = {
    input: '',
  };

  handleInputChange = event => {
    this.setState({ input: event.currentTarget.value });
  };

  reset = () => {
    this.setState({ input: '' });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.input.trim() === '') {
      toast.error('search cannot be an empty string');
      return;
    }
    this.props.onGetRequest(this.state.input.trim().toLowerCase());
    this.reset();
  };

  render() {
    return (
      <Box
        as="header"
        bg="primary"
        p={4}
        display="flex"
        justifyContent="center"
      >
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.input}
            onChange={this.handleInputChange}
          ></Input>
          <Btn type="submit">
            <FcSearch size={20} />
          </Btn>
        </Form>
      </Box>
    );
  }
}

SearchBar.propTypes = {
  onGetRequest: PropTypes.func.isRequired,
};
