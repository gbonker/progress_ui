import React, { Component } from 'react';
import TableRow from './TableRow';
import Pagination from './Pagination';
import data from '../../data.json';

class Table extends Component {
  render() {
    return(
      <div className="table-wrapper table-panel">
        <table className="table">
          <thead className="thead">
            <tr>
              <th scope="column" className="text-base"><strong><a href="">ID</a></strong></th>
              <th scope="column" className="text-base"><strong><a href="">Path</a></strong></th>
              <th scope="column" className="text-base"><strong><a href="">Name</a></strong></th>
              <th scope="column" className="text-base"><strong><a href="">Owner Committee</a></strong></th>
              <th scope="column" className="text-base"><strong><a href="">Created By</a></strong></th>
              <th scope="column" className="text-base"><strong><a href="">Date Created</a></strong></th>
              <th scope="column" className="text-base"><strong><a href="">Description</a></strong></th>
            </tr>
          </thead>
          <tbody className="tbody">
            {data.map((item, index) => 
              <TableRow 
                key={index} 
                id={item.id}
                path={item.path}
                name={item.name}
                ownerCommittee={item.ownerCommittee}
                createdBy={item.createdBy} 
                dateCreated={item.dateCreated}
                description={item.description}
              />
            )}
          </tbody>
        </table>
        <Pagination />
      </div>
    );
  }
}

export default Table;