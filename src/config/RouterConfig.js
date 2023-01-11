import { DefaultLayout, OnlyHeader, HeaderAndSidebar } from '../layouts';
import { Home, Catalog } from '../pages';
import Detail from '../pages/Detail';

export const publicRouter = [
  {
    path: '/',
    element: Home,
    layout: DefaultLayout,
  },
  {
    path: '/:category',
    element: Catalog,
    layout: DefaultLayout,
  },
  {
    path: '/:category/search/:keyword',
    element: Catalog,
    layout: DefaultLayout,
  },
  {
    path: '/:category/:id',
    element: Detail,
    layout: DefaultLayout,
  },
];
