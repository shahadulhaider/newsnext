import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import { Post } from '../../shared/types';
import { Breadcrumbs } from '../Breadcrumbs';
import { Content, Title, Figure, Meta } from './styles/postbody';

interface PostBoyProps {
  post: Post;
}

export const PostBody: FunctionComponent<PostBoyProps> = ({ post }) => {
  return (
    <div>
      <Breadcrumbs post={post} />
      <Title>{post.title}</Title>
      <Figure>
        <img src={post.image} alt={post.title} />
      </Figure>
      <Content dangerouslySetInnerHTML={{ __html: post.content }} />
      <Meta>
        <span>{post.date}</span>
        <span>&middot;</span>
        <Link href='/category/[id]' as={`/category/${post.category}`}>
          <a>{post.category}</a>
        </Link>
        <span>&middot;</span>
        <a href={post.source}>Source</a>
      </Meta>
    </div>
  );
};
