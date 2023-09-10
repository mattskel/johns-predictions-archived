import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Breadcrumbs from '../components/Breadcrumbs';
import ProspectivesList from './ProspectivesList';

function Prospectives() {
  return (
    <div className="prospectives">
      {/* <Breadcrumbs />
      <Outlet /> */}
      <ProspectivesList />
    </div>
  );
}

export default Prospectives;
