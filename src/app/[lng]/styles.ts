import { styled } from 'styled-components';

export const Wrapper = styled.div`
  width: ${({ theme }) => theme.width.s}%;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.BRONZED};
`;
