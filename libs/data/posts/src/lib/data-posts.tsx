import axios from 'redaxios';
import { queryOptions } from '@tanstack/react-query';

export type PostType = {
  id: string;
  title: string;
  body: string;
};

export class PostNotFoundError extends Error {}

const fetchPost = async (postId: string) => {
  console.info(`Fetching post with id ${postId}...`);
  await new Promise((r) => setTimeout(r, 500));
  const post = await axios
    .get<PostType>(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((r) => r.data)
    .catch((err) => {
      if (err.status === 404) {
        throw new PostNotFoundError(`Post with id "${postId}" not found!`);
      }
      throw err;
    });

  return post;
};

const fetchPosts = async () => {
  console.info('Fetching posts...');
  await new Promise((r) => setTimeout(r, 500));
  return axios
    .get<Array<PostType>>('https://jsonplaceholder.typicode.com/posts')
    .then((r) => r.data.slice(0, 10));
};

export const postQueryOptions = (postId: string) =>
  queryOptions({
    queryKey: ['posts', { postId }],
    queryFn: () => fetchPost(postId),
  });

export const postsQueryOptions = queryOptions({
  queryKey: ['posts'],
  queryFn: () => fetchPosts(),
});