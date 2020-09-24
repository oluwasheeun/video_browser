import React from 'react';

class SearchBar extends React.Component {
  state = {
    term: '',
  };

  onChangeInput = e => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();

    //Call API from parent component
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className='search-bar ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label> Video Search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={this.onChangeInput}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
