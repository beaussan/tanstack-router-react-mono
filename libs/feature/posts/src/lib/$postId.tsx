import * as React from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { postQueryOptions } from '@tanstack-router-react-mono/data-posts';

import { getRouteApi } from '@tanstack-router-react-mono/data-router';

const route = getRouteApi('/posts/$postId');

export function PostComponent() {
  const postId = route.useParams().postId;
  const { data: post } = useSuspenseQuery(postQueryOptions(postId));

  return (
    <div className="space-y-2">
      <h4 className="text-xl font-bold underline">{post.title}</h4>
      <div className="text-sm">{post.body}</div>
    </div>
  );
}
