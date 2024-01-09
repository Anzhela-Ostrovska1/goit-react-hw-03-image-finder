import React, { Component } from 'react';

import Searchbar from './Modal/Searchbar';
import ImageGallery from './Modal/ImageGallery';
import Loader from './Modal/Loader';
import Api from '../services/api';
import Button from './Modal/Button';

class App extends Component {
  state = {
    pictureName: '',
    received: 0,
    pictures: [],
    error: null,
    status: 'idle',
    loadMore: false,
    page: 1,
    isModalOpen: false,
    selectedPicture: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.pictureName !== this.state.pictureName ||
      prevState.page !== this.state.page
    ) {
      this.fetchPictures();
    }
  }
  handleFormSubmit = pictureName => {
    this.setState({ pictureName, pictures: [], page: 1 });
  };
  loadMorePictures = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  fetchPictures = (currentPosition = document.documentElement.scrollTop) => {
    let { pictureName, page } = this.state;
    this.setState({ status: 'pending' });

    Api.fetchPictures(pictureName, page)
      .then(({ hits, totalHits }) => {
        this.setState(
          prev => ({
            pictures: [...prev.pictures, ...hits],
            loadMore: this.state.page < Math.ceil(totalHits / 12),
            status: 'resolved',
          }),
          () => {
            window.scrollTo(0, currentPosition);
          }
        );
      })
      .catch(error => this.setState({ error, status: 'rejected' }));
  };

  renderImageGallery() {
    const { pictures, error, status, loadMore } = this.state;
    if (status === 'pending') {
      return <Loader />;
    }
    if (status === 'rejected') {
      return <h1>{error.message}</h1>;
    }
    if (status === 'resolved') {
      return (
        <>
          <ImageGallery pictures={pictures} />
          {loadMore && <Button onClick={this.loadMorePictures} />}
        </>
      );
    }
  }

  render() {
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {this.renderImageGallery()}
      </div>
    );
  }
}
export default App;
