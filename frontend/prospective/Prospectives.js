import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Breadcrumbs from '../components/Breadcrumbs';
import ProspectivesList from './ProspectivesList';
import Button from '@material-ui/core/Button'
// import { Link } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Prospectives() {
  return (
    <div className="prospectives">
      <Link to="/admin/prospective/new">
        <button>New</button>
      </Link>
      <ProspectivesList />
    </div>
  );
}

export default Prospectives;
