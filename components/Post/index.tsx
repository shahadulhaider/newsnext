import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import { Card, Content, Figure, Title } from './styles/post';

export const Post: FunctionComponent = () => {
  return (
    <Link href='/post/[id]' as='/post/example' passHref>
      <Card>
        <Figure>
          <img src='/image1.jpg' alt='Post' />
        </Figure>
        <Title>Post Title</Title>
        <Content>
          <p>
            lorem impsum dolor emoui aoijnam sjhn. sed so di eidusoj qerty
            eiusdad en libre
          </p>
        </Content>
      </Card>
    </Link>
  );
};
