import css from './Modal.module.css';
import { Component } from 'react';
import Modal from './Modal';

class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { picture } = this.props;
    const { isModalOpen } = this.state;

    return (
      <li key={picture.id} className={css.ImageGalleryItem}>
        <img
          onClick={this.openModal}
          className={css.ImageGalleryItemImage}
          src={picture.webformatURL}
          alt={picture.tags}
        />
        {isModalOpen && <Modal picture={picture} onClose={this.closeModal} />}
      </li>
    );
  }
}
export default ImageGalleryItem;
