import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { Outlet } from 'react-router-dom';
import ProspectivesList from '../components/ProspectivesList';

function Prospectives() {
  return (
    <div className="prospectives">
      <Breadcrumbs />
      <Outlet />
      {/* <ProspectivesList /> */}
    </div>
  );
}

export default Prospectives;
