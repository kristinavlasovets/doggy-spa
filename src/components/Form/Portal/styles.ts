import { styled } from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  width: ${({ theme }) => theme.width.s}%;
  height: 100%;
  opacity: ${({ theme }) => theme.opacities.m};
  left: 0%;
  bottom: 0%;

  background-color: gray;
  z-index: ${({ theme }) => theme.zIndexes.s};
`;
