import styled, { keyframes } from 'styled-components';

const spin = keyframes`
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: ${({ theme }) => theme.borders.xs}px solid ${({ theme }) => theme.colors.PINK};
  border-top: ${({ theme }) => theme.borders.xs}px solid ${({ theme }) => theme.colors.GRAY};
  border-radius: ${({ theme }) => theme.borderRadiuses.l}%;
  width: 55px;
  height: 55px;
  animation: ${spin} 2s linear infinite;
  z-index: ${({ theme }) => theme.zIndexes.s};
`;
