import React from 'react';
import { routeItems } from '../../Routes';
import { useNavigate } from 'react-router-dom';
import { RouteItem } from '../../models/RouteItem';
import './Sidebar.css';
import { useTranslation } from 'react-i18next';

function SideBar() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const MeunItem = (routeItem: RouteItem) => (
    <div
      className="menu-item"
      onClick={() => navigate(routeItem.path)}
      key={routeItem.id}
    >
      <i className={routeItem.iconClass} />
      {t(routeItem.label)}
    </div>
  );

  return (
    <div className="sidebar text-whitesmoke p-4">
      <h1>{t('SIDEBAR.TITLE')}</h1>
      {routeItems.map(routeItem => MeunItem(routeItem))}
    </div>
  );
}

export default SideBar;
