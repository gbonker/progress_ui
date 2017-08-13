import React, { Component } from 'react';
import SearchBar from '../shared/SearchBar';
import TextInput from '../shared/TextInput';
import Dropdown from '../shared/Dropdown';

class SearchPanel extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      searchName: ''
    };
  }

  onChange = (event) => {
    this.setState({
      searchName: event.target.value
    });
    this.props.onChange(event);
  }

  render() {
    var committeeOptions = {
      "": "", 
      "People for Good": "peopleForGood"
    }
    var appliesToOptions = {
      "": "", 
      "Option 1": "option1", 
      "Option 2": "option2"
    }

    return (
      <div className="panel panel-default panel-filters">
        <div className="panel-content">
          <div className="grid-half">
            <div className="col-md-3">
              <SearchBar label={"Tag Name"} onSearchTermChange={event => this.onChange(event)} />
            </div>
            <div className="col-md-3">
              <TextInput label={"Parent Name"} />
            </div>
            <div className="col-md-3">
              <TextInput label={"Ancestor Name"} />
            </div>
            <div className="col-md-3">
              <TextInput label={"Created By"} />
            </div>
          </div>
          <div className="grid-half">
            <div className="col-md-3">
              <Dropdown required={false} label={"Committee"} options={committeeOptions} />
            </div>
            <div className="col-md-3">
              <Dropdown required={false} label={"Applies To"} options={appliesToOptions} />
            </div>
          </div>
          <div className="panel-footer">
            <div className="panel-buttons">
              <button className="btn btn-gray">Remember Filters</button>
              <button className="btn btn-blue">Refresh Results</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchPanel;