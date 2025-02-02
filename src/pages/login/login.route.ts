import { createRouteObject, pathKeys } from '@/shared/lib/router';
import { createElement, lazy } from 'react';

const LoginPage = lazy(() => import('./login.ui').then((module) => ({ default: module.LoginPage })));

export const loginRoute = createRouteObject(pathKeys.login(), {
  element: createElement(LoginPage),
});
