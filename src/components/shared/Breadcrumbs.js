import React from 'react';
import { Link } from 'react-router-dom'

const Breadcrumbs = () => {
  return (
    <ol className="breadcrumbs">
      <li><Link to='/list'>List Page</Link></li>
      <li><Link to='/details'>Details Page</Link></li>
    </ol>
  );
}

export default Breadcrumbs;