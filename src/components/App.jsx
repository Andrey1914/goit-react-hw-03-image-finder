import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Section from './Section/Section';

import { Global } from '@emotion/react';
import { GlobalStyles } from './GlobalStyles';

export default class App extends Component {
  state = {
    request: '',
    page: 1,
  };

  addRequest = newRequest => {
    if (this.state.request !== newRequest) {
      this.setState({ request: newRequest.toLowerCase(), page: 1 });
    }
  };

  loadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    const { request, page } = this.state;
    return (
      <div>
        <Global styles={GlobalStyles} />
        <SearchBar onGetRequest={this.addRequest} />
        <Section>
          <ImageGallery
            request={request}
            page={page}
            loadMore={this.loadMore}
          />
        </Section>

        <ToastContainer autoClose={2500} />
      </div>
    );
  }
}
