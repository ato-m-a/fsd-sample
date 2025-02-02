import type { RouteObject, LoaderFunction } from 'react-router-dom';
import type { ReactNode } from 'react';

export type CreateRouteObjectOptions = {
  element: ReactNode;
  loader?: LoaderFunction;
};

export const createRouteObject = (path: string, options: CreateRouteObjectOptions): RouteObject => ({
  path,
  ...options,
});