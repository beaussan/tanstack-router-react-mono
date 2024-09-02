import { createFileRoute } from '@tanstack/react-router';
import { postsQueryOptions } from '@tanstack-router-react-mono/data-posts';

export const Route = createFileRoute('/posts')({
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(postsQueryOptions),
});
