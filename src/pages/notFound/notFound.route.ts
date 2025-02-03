import { createElement, lazy } from 'react';
import { createRouteObject, pathKeys } from '@/shared/lib/router';

const NotFoundPage = lazy(() => import('./notFound.ui').then((module) => ({ default: module.NotFoundPage })));

export const notFoundRoute = createRouteObject(pathKeys.notFound(), {
  element: createElement(NotFoundPage),
});