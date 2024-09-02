import { RoutePaths } from '@tanstack-router-react-mono/data-router';
import React from 'react';
import { RootComponent } from './routesdddd/__root';
import { Home } from './routesdddd';
import { PostsComponent } from './routesdddd/posts';
import { PostsIndexComponent } from './routesdddd/posts/index';
import { LayoutAComponent } from './routesdddd/_layout/_layout-2/layout-a';
import { LayoutBComponent } from './routesdddd/_layout/_layout-2/layout-b';
import { PostComponent } from './routesdddd/posts/$postId';
import { LayoutComponent2 } from './routesdddd/_layout/_layout-2';
import { About } from './routesdddd/about.lazy';
import { GlobalLayoutComponent } from './routesdddd/_layout';

export const routerMap = {
  '/': Home,
  '/_layout': GlobalLayoutComponent,
  '/posts': PostsComponent,
  '/about': About,
  '/_layout/_layout-2': LayoutComponent2,
  '/posts/': PostsIndexComponent,
  '/posts/$postId': PostComponent,
  '/_layout/_layout-2/layout-a': LayoutAComponent,
  '/_layout/_layout-2/layout-b': LayoutBComponent,
  __root__: RootComponent,
} as const satisfies Record<RoutePaths, () => React.ReactElement | null>;