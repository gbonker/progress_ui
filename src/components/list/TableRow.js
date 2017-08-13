import React from 'react';

const TableRow = ({id, path, name, ownerCommittee, createdBy, dateCreated, description}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{path}</td>
      <td><a href="">{name}</a></td>
      <td>{ownerCommittee}</td>
      <td>{createdBy}</td>
      <td>{dateCreated}</td>
      <td>{description}</td>
    </tr>
  );
}

export default TableRow;