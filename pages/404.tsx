import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Main = styled.h2`
  font-size: 10rem;
  line-height: 11rem;
  font-family: ${(props) => props.theme.fonts.accent};
  width: 100%;
`;

const NotFound: FunctionComponent = () => {
  return (
    <Container>
      <Main>404</Main>
      Oops! The page is not found!
    </Container>
  );
};

export default NotFound;
