import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { homeRoute } from '@/pages/home';
import { loginRoute } from '@/pages/login';

const browserRouter = createBrowserRouter([
  {
    children: [homeRoute],
  },
  {
    children: [loginRoute],
  },
]);

export function BrowserRouter() {
  return <RouterProvider router={browserRouter} />;
}