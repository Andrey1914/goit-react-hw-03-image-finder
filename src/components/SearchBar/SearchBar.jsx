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
        minHeight={64}
        boxShadow="0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)"
      >
        <Form onSubmit={this.handleSubmit}>
          <Btn type="submit">
            <FcSearch size={20} />
          </Btn>
          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.input}
            onChange={this.handleInputChange}
          ></Input>
        </Form>
      </Box>
    );
  }
}

SearchBar.propTypes = {
  onGetRequest: PropTypes.func.isRequired,
};
