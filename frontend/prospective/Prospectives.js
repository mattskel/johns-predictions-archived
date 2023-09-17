import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Breadcrumbs from '../components/Breadcrumbs';
import ProspectivesList from './ProspectivesList';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Divider } from '@material-ui/core';
// import { Link } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Prospectives() {
  return (
    <div className="prospectives">
      <Typography variant="h6" color="inherit" display="inline">
        My Prospectives
      </Typography> 
      <Divider />
      <ProspectivesList />
      <Link to="/admin/prospective/new">
        <button >
          Add new
        </button>
      </Link>
    </div>
  );
}

export default Prospectives;
