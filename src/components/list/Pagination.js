import React from 'react';

const Pagination = (props) => {
  var tags = "Tags";
  if (props.numberOfResults === 1) {
    tags = "Tag";
  }
  return (
    <div className="pagination-container">
      <strong>{props.numberOfResults} {tags} • 1 Page</strong>
    </div>
  );
}

export default Pagination;