import React, { FunctionComponent } from 'react';
import { Center } from '../Center';
import { Container } from './styles/footer';

export const Footer: FunctionComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <Center>
        <a href='https://shahadulhaider.com'>
          Built with Next.js + Typescript,
        </a>{' '}
        {currentYear}
      </Center>
    </Container>
  );
};
