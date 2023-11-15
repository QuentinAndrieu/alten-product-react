import React from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

type BreadCrumbItem = {
  label?: string;
  icon?: string;
  url: string;
};

export default function BreadCrumbRoute() {
  const location = useLocation();
  const { t } = useTranslation();

  const breadcrumbMap: { [key: string]: string } = {
    '/products': t('BREADCRUMB.PRODUCTS'),
    '/admin': t('BREADCRUMB.ADMIN'),
    '/admin/products': t('BREADCRUMB.ADMIN_PRODUCTS'),
  };

  const pathSegments = location.pathname
    .split('/')
    .filter(segment => segment !== '');

  const breadcrumbItems: BreadCrumbItem[] = pathSegments.map(
    (segment, index) => {
      const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
      const label = breadcrumbMap[path] || segment;

      return {
        label,
        url: path,
      };
    },
  );

  const home: BreadCrumbItem = { icon: 'pi pi-home', url: '/products' };

  return <BreadCrumb model={breadcrumbItems} home={home} />;
}
