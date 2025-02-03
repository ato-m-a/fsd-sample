import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom';
import { homeRoute } from '@/pages/home';
import { loginRoute } from '@/pages/login';
import { notFoundRoute } from '@/pages/notFound';
import { pathKeys } from '@/shared/lib/router';

const browserRouter = createBrowserRouter([
  {
    children: [homeRoute],
  },
  {
    children: [loginRoute],
  },
  {
    children: [notFoundRoute]
  },
  {
    loader: async () => redirect(pathKeys.notFound()),
    path: '*',
  },
]);

export function BrowserRouter() {
  return <RouterProvider router={browserRouter} />;
}