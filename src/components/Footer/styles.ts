import { styled } from 'styled-components';

export const Wrapper = styled.footer`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.width.s}%;
  height: 485px;
  background-color: ${({ theme }) => theme.colors.BEIGE};
`;

export const Pattern = styled.div`
  width: ${({ theme }) => theme.width.s}%;
  height: ${({ theme }) => theme.height.xxs}px;
  background-color: ${({ theme }) => theme.colors.ROSEY};
`;

export const Main = styled.div`
  width: ${({ theme }) => theme.width.s}%;
  height: ${({ theme }) => theme.height.l}px;
  padding: ${({ theme }) => theme.paddings.xs}px;
  background-color: transparent;
`;

export const Copyright = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.width.s}%;
  height: ${({ theme }) => theme.height.xs}px;
  background-color: ${({ theme }) => theme.colors.ROSEY};
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.CHARCOAL};
  font-family: ${({ theme }) => theme.fontFamilies.Cormorant};
`;
