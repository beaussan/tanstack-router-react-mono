import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from '@tanstack/react-router';
// Import the generated route tree
import { QueryClientProvider } from '@tanstack/react-query';
import {
  router,
  queryClient,
  Outlet,
  RoutePaths,
} from '@tanstack-router-react-mono/data-router';
import { routerMap } from './routerMap';

function EmptyComponent() {
  return <Outlet />;
}

Object.entries(routerMap).forEach(([path, component]) => {
  const foundRoute = router.routesById[path as RoutePaths];
  if (foundRoute) {
    console.log('Found route', path);
    foundRoute.update({
      component: component ?? EmptyComponent,
    });
  }
});

console.log(router.flatRoutes);

console.log(router);

// Render the app
const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>
  );
}
