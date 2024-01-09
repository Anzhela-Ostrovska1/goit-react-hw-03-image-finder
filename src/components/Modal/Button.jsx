import css from '../Modal/Modal.module.css';

function Button({ onClick }) {
  return (
    <div className={css.LoadMoreBtn}>
      <button className={css.Button} type="button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
}

export default Button;
