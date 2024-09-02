import { createFileRoute } from '@tanstack/react-router';
import { postQueryOptions } from '@tanstack-router-react-mono/data-posts';

export const Route = createFileRoute('/posts/$postId')({
  loader: ({ context: { queryClient }, params: { postId } }) => {
    return queryClient.ensureQueryData(postQueryOptions(postId));
  },
});
