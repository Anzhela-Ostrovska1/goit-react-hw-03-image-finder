import { Component } from 'react';
import css from './Modal.module.css';
import searchPicture from '../Modal/pictures/search.png';

class Searchbar extends Component {
  state = {
    pictureName: '',
  };

  handleNameChange = event => {
    this.setState({ pictureName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.pictureName.trim() === '') {
      alert('Please enter the name in the search bar');
      return;
    }
    this.props.onSubmit(this.state.pictureName);
    this.setState({ pictureName: '' });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button
            type="submit"
            className={css.SearchFormButton}
            style={{ backgroundImage: `url(${searchPicture})` }}
          >
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.pictureName}
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
