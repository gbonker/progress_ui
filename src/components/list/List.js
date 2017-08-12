import React, { Component } from 'react';
import SearchPanel from './SearchPanel';
import Table from './Table';

class List extends Component {
  render() {
    return (
      <div>
        <div className="van-inner">
          <div className="van-header">
            <div className="page-title-container">
              <div className="page-title-icon">
                <div className="square blue">
                  <span aria-hidden="true" className="glyphicons glyphicons-tags"></span>
                </div>
              </div>
              <div className="page-title-group">
                <h3 className="page-title-sub">Admin</h3>
                <h5 className="page-title">Tags</h5>
              </div>
              <div className="van-header-actions page-title-actions btn-group right">
                <button className="btn btn-gray btn-dropdown">
                  List
                  <ul className="dropdown-menu left">
                    <li>
                      <a href="">Dropdown List Item</a>
                    </li>
                    <li>
                      <a href="">Dropdown List Item</a>
                    </li>
                    <li>
                      <a href="">Dropdown List Item</a>
                    </li>
                  </ul>
                </button>
                <button className="btn btn-blue">Add New Tag</button>
              </div>
            </div>
          </div>
          <div className="van-listpage">
            <SearchPanel />
            <Table />
          </div>
        </div>
      </div>
    );
  }
}

export default List;