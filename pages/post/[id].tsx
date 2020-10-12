import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React, { FunctionComponent } from 'react';
import { fetchPost } from '../../api/post';
import { Loader, PostBody } from '../../components';
import { postPaths } from '../../shared/staticPaths';
import { Post as PostType } from '../../shared/types';

interface PostProps {
  post: PostType;
}

export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) => {
  const post = await fetchPost(params.id as string);
  return {
    props: { post },
  };
};

export async function getStaticPaths() {
  return {
    paths: postPaths,
    fallback: true,
  };
}

const Post: FunctionComponent<PostProps> = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) return <Loader />;

  return <PostBody post={post} />;
};
export default Post;
