import * as React from 'react';
import { ErrorComponent } from '@tanstack/react-router';
import {
  useQueryErrorResetBoundary,
  useSuspenseQuery,
} from '@tanstack/react-query';
import {
  PostNotFoundError,
  postQueryOptions,
} from '@tanstack-router-react-mono/data-posts';

import {
  getRouteApi,
  useRouter,
} from '@tanstack-router-react-mono/data-router';
import type { ErrorComponentProps } from '@tanstack/react-router';

export function PostErrorComponent({ error, reset }: ErrorComponentProps) {
  const router = useRouter();
  if (error instanceof PostNotFoundError) {
    return <div>{error.message}</div>;
  }
  const queryErrorResetBoundary = useQueryErrorResetBoundary();

  React.useEffect(() => {
    queryErrorResetBoundary.reset();
  }, [queryErrorResetBoundary]);

  return (
    <div>
      <button
        onClick={() => {
          router.invalidate();
        }}
      >
        retry
      </button>
      <ErrorComponent error={error} />
    </div>
  );
}

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
