import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      searchTerm: '' 
    };
  }

  render() {
    return (
      <li className="input-unit">
        <label className="input-label"><strong>{this.props.label}</strong></label>
        <div className="input-control">
          <input 
            className="input-element input-element-base" 
            type="text" 
            value={this.state.searchTerm}
            onChange={event => this.onInputChange(event)}
          />
        </div>
      </li>
    );
  }

  onInputChange = (event) => {
    this.setState({searchTerm: event.target.value});
    this.props.onSearchTermChange(event);
  }
}

export default SearchBar;