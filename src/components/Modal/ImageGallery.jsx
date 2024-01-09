import css from './Modal.module.css';
import ImageGalleryItem from './ImageGalleryItem';

function ImageGallery({ pictures }) {
  return (
    <div className={css.Container}>
      <ul className={css.ImageGallery}>
        {pictures.map((picture, idx) => {
          return <ImageGalleryItem key={idx} picture={picture} />;
        })}
      </ul>
    </div>
  );
}

export default ImageGallery;
