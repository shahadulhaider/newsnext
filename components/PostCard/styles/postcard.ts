import styled from 'styled-components';

export const Card = styled.a`
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.033), 0 4px 25px rgba(0, 0, 0, 0.07);
  color: black;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    color: black;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.033), 0 6px 35px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
`;

export const Figure = styled.figure`
  padding: 56% 0 0;
  margin: 0;
  max-width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 6px 6px 0 0;

  img {
    max-width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
  }
`;

export const Title = styled.h3`
  margin: 10px 20px;
  font-size: 1.4rem;
`;

export const Lead = styled.div`
  margin: 0 20px 20px;

  & > * {
    margin: 0 0 10px;
  }
`;
