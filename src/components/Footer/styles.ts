import { styled } from 'styled-components';

export const Wrapper = styled.footer`
  margin: ${({ theme }) => theme.margins.xxxs} auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.width.s}%;
  height: 485px;
  background-color: ${({ theme }) => theme.colors.BEIGE};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    height: fit-content;
  }
`;

export const Pattern = styled.div`
  width: ${({ theme }) => theme.width.s}%;
  height: ${({ theme }) => theme.height.xxs}px;
  background-color: ${({ theme }) => theme.colors.ROSEY};
`;

export const Main = styled.div`
  margin: ${({ theme }) => theme.margins.xxxs} auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ theme }) => theme.width.s}%;
  height: ${({ theme }) => theme.height.l}px;
  padding: ${({ theme }) => theme.paddings.xs}px;
  background-color: transparent;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    height: fit-content;
    flex-direction: column;
    align-items: flex-start;
    padding: ${({ theme }) => theme.paddings.xs}px;
  }
`;

export const Connection = styled.div`
  margin: ${({ theme }) => theme.margins.xxxs} auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: ${({ theme }) => theme.paddings.xs}px;
  background-color: transparent;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    align-items: center;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.CHARCOAL};
  font-family: ${({ theme }) => theme.fontFamilies.cormorant};
`;

export const Copyright = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ theme }) => theme.width.s}%;
  height: ${({ theme }) => theme.height.xs}px;
  background-color: ${({ theme }) => theme.colors.ROSEY};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    padding-top: ${({ theme }) => theme.paddings.xs}px;
    padding-bottom: ${({ theme }) => theme.paddings.xs}px;
    height: fit-content;
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.h5`
  padding: 0 ${({ theme }) => theme.paddings.xs}px 0 ${({ theme }) => theme.paddings.xs}px;
  font-family: ${({ theme }) => theme.fontFamilies.cormorant};
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  font-weight: ${({ theme }) => theme.fontWeights.xl};
  color: ${({ theme }) => theme.colors.CHARCOAL};

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    margin: ${({ theme }) => theme.margins.xxxs} auto;
    text-align: center;
  }
`;

export const Icons = styled.div`
  padding: ${({ theme }) => theme.paddings.xs}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ theme }) => theme.width.smmm}px;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    width: ${({ theme }) => theme.width.ssmm}px;
    padding: ${({ theme }) => theme.paddings.xs}px ${({ theme }) => theme.paddings.xxxs}px;
  }
`;

export const CopyrightMessage = styled.div`
  width: fit-content;
  height: ${({ theme }) => theme.height.xs}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${({ theme }) => theme.fontFamilies.cormorant};
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.s};
  color: ${({ theme }) => theme.colors.CHARCOAL};
`;
