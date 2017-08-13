import React from 'react';
import TableRow from './TableRow';
import Pagination from './Pagination';

const Table = (props) => {
  var noResults;
  if (props.data.length === 0) {
    noResults = <p className="center">No records matched your search. Try again with a different search term.</p>
  }

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
          {props.data.map((item, index) => 
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
      {noResults}
      <Pagination numberOfResults={props.data.length} />
    </div>
  );
}

export default Table;