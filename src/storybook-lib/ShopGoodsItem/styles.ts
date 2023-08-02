import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 25%;
  height: fit-content;

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    width: ${({ theme }) => theme.width.ssm}px;
  }
`;

export const Title = styled.p`
  margin-top: ${({ theme }) => theme.margins.xxs}px;
  font-family: ${({ theme }) => theme.fontFamilies.cormorant};
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.s};
  color: ${({ theme }) => theme.colors.CHARCOAL};
`;

export const Price = styled.p`
  margin-top: ${({ theme }) => theme.margins.xs}px;
  font-family: ${({ theme }) => theme.fontFamilies.cormorant};
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  font-weight: ${({ theme }) => theme.fontWeights.l};
  color: ${({ theme }) => theme.colors.CHARCOAL};

  @media (max-width: ${({ theme }) => theme.dimensions.laptop}px) {
    margin-top: ${({ theme }) => theme.margins.xxxs}px;
    margin-bottom: ${({ theme }) => theme.margins.xs}px;
  }
`;

export const Image = styled.img`
  width: 326px;
  height: ${({ theme }) => theme.height.m}px;
  border: ${({ theme }) => theme.borders.xs}px solid ${({ theme }) => theme.colors.BEIGE};
`;
