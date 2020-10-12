import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import { Post as PostType } from '../../shared/types';
import { Card, Figure, Lead, Title } from './styles/postcard';

interface PostProps {
  post: PostType;
}

export const PostCard: FunctionComponent<PostProps> = ({ post }) => {
  return (
    <Link href='/post/[id]' as={`/post/${post.id}`} passHref>
      <Card>
        <Figure>
          <img src={post.image} alt={post.title} />
        </Figure>
        <Title>{post.title}</Title>
        <Lead>{post.lead}</Lead>
      </Card>
    </Link>
  );
};
