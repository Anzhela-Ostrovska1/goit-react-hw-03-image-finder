import css from './Modal.module.css';
import ImageGalleryItem from './ImageGalleryItem';
import Button from './Button';

function ImageGallery({ pictures, loadMore, onLoadMore }) {
  return (
    <div className={css.Container}>
      <ul className={css.ImageGallery}>
        {pictures.map(picture => {
          return <ImageGalleryItem key={picture.id} picture={picture} />;
        })}
      </ul>

      {loadMore && <Button onClick={onLoadMore} />}
    </div>
  );
}

export default ImageGallery;
