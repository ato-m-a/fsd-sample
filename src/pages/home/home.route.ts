import { createRouteObject, pathKeys } from '@/shared/lib/router';
import { createElement, lazy } from 'react';

const HomePage = lazy(() => import('./home.ui').then((module) => ({ default: module.HomePage })));

export const homeRoute = createRouteObject(pathKeys.home(), {
  element: createElement(HomePage),
});
