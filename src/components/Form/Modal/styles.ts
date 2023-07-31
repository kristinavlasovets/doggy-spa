import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: ${({ theme }) => theme.paddings.xs}px;
  position: fixed;
  top: 5%;
  left: 10%;
  margin: ${({ theme }) => theme.margins.xs} auto;
  width: 650px;
  height: 90%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.WHITE};
  border: ${({ theme }) => theme.borders.xs}px solid ${({ theme }) => theme.colors.BEIGE};
  border-radius: ${({ theme }) => theme.borderRadiuses.s}px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
  z-index: ${({ theme }) => theme.zIndexes.s};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    width: ${({ theme }) => theme.width.smm}px;
  }
`;

export const Text = styled.p`
  margin-bottom: ${({ theme }) => theme.margins.xxs}px;
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamilies.cormorant};
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.m};
  color: ${({ theme }) => theme.colors.CHARCOAL};
`;
