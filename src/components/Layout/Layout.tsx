import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../Sidebar/Sidebar';
import BreadCrumbRoute from '../BreadcrumbRoute/BreadcrumbRoute';
import './Layout.css';

function Layout() {
  return (
    <div className="layout flex h-full background-whitesmoke">
      <SideBar />

      <div className="layout-main p-5">
        <div className="mb-5">
          <BreadCrumbRoute />
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
