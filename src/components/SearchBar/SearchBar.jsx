import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { FcSearch } from 'react-icons/fc';

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
      <header>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            autofocus
            placeholder="Search images and photos"
            value={this.state.input}
            onChange={this.handleInputChange}
          ></input>
          <button type="submit">
            <FcSearch size={20} />
          </button>
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {
  onGetRequest: PropTypes.func.isRequired,
};
