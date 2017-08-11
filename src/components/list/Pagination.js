import React from 'react';

const Pagination = () => {
  return (
    <div className="pagination-container">
      <ol className="pagination">
        <li className="pagination-first disabled">
          <a href="">
            <span className="glyphicons glyphicons-chevron-left" aria-hidden="true"></span>
            <span className="glyphicons glyphicons-chevron-left" aria-hidden="true"></span>
            <span className="reader-only">First</span>
          </a>
        </li>
        <li className="pagination-prev disabled">
          <a href="">
            <span className="glyphicons glyphicons-chevron-left" aria-hidden="true"></span>
            <span className="reader-only">Previous</span>
         </a>
        </li>
        <li className="active">
          <a href="">1</a>
        </li>
        <li>
          <a href="">2</a>
        </li>
        <li>
          <a href="">...</a>
        </li>
        <li>
          <a href="">11</a>
        </li>
        <li>
          <a href="">12</a>
        </li>
        <li className="pagination-next">
          <a href="">
            <span className="glyphicons glyphicons-chevron-right" aria-hidden="true"></span>
            <span className="reader-only">Next</span>
          </a>
        </li>
        <li className="pagination-last">
          <a href="">
            <span className="glyphicons glyphicons-chevron-right" aria-hidden="true"></span>
            <span className="glyphicons glyphicons-chevron-right" aria-hidden="true"></span>
            <span className="reader-only">Last</span>
          </a>
        </li>
      </ol>
      <div className="pagination-stats">Displaying X-Y of Z Results</div>
    </div>
  );
}

export default Pagination;