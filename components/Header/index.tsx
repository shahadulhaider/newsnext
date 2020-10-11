import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { Container, Logo } from './styles/header';
import { Center } from '../Center';

export const Header: FunctionComponent = () => {
  return (
    <Container>
      <Center>
        <Logo>
          <Link href='/'>
            <a>What's Next?!</a>
          </Link>
        </Logo>
      </Center>
    </Container>
  );
};
