import { router, queryClient } from './router';
export type { RouterType, RoutePaths } from './router';

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export { router, queryClient };

export {
  Outlet,
  Link,
  useRouteContext,
  useRouter,
  RouterProvider,
  getRouteApi,
} from '@tanstack/react-router';
