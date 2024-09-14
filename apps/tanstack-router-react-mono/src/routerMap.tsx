import { RoutePaths } from '@tanstack-router-react-mono/data-router';
import React from 'react';
import { RootComponent } from './otherRoutes/__root';
import { Home } from './otherRoutes';
import { LayoutAComponent } from './otherRoutes/_layout/_layout-2/layout-a';
import { LayoutBComponent } from './otherRoutes/_layout/_layout-2/layout-b';
import { LayoutComponent2 } from './otherRoutes/_layout/_layout-2';
import { About } from './otherRoutes/about';
import { GlobalLayoutComponent } from './otherRoutes/_layout';
import {
  PostComponent,
  PostsComponent,
  SelectAPost,
} from '@tanstack-router-react-mono/feature-post';

export const routerMap = {
  '/': Home,
  '/_layout': GlobalLayoutComponent,
  '/posts': PostsComponent,
  '/about': About,
  '/_layout/_layout-2': LayoutComponent2,
  '/posts/': SelectAPost,
  '/posts/$postId': PostComponent,
  '/_layout/_layout-2/layout-a': LayoutAComponent,
  '/_layout/_layout-2/layout-b': LayoutBComponent,
  __root__: RootComponent,
} as const satisfies Record<RoutePaths, () => React.ReactElement | null>;
