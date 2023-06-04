import React from 'react';
import { Outlet } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';

function Prospectives() {
  return (
    <div className="prospectives">
      <Breadcrumbs />
      <Outlet />
    </div>
  );
}

export default Prospectives;
