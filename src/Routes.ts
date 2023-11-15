import { Path } from './enums/Path';
import { RouteItem } from './models/RouteItem';

export const routeItems: RouteItem[] = [
  {
    id: 'products',
    path: Path.PRODUCTS,
    iconClass: 'pi pi-shopping-cart',
    label: 'ROUTE.PRODUCTS',
  },
  {
    id: 'admin-product',
    path: Path.ADMIN_PRODUCTS,
    iconClass: 'pi pi-users',
    label: 'ROUTE.ADMIN',
  },
];
