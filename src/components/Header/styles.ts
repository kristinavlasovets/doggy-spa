import { styled } from 'styled-components';

export const Wrapper = styled.header`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.width.s}%;
  background-color: ${({ theme }) => theme.colors.WHITE};
  font-family: ${({ theme }) => theme.fontFamilies.Cormorant};
  color: ${({ theme }) => theme.colors.CHARCOAL};

  @media (max-width: ${({ theme }) => theme.dimensions.tablet}px) {
    height: fit-content;
  }
`;

export const NavBar = styled.div`
  margin: 0 auto;
  width: ${({ theme }) => theme.width.s}%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.dimensions.tablet}px) {
    flex-direction: column;
  }
`;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.width.s}%;
  height: ${({ theme }) => theme.height.xs}px;
  background-color: ${({ theme }) => theme.colors.BEIGE};

  @media (max-width: ${({ theme }) => theme.dimensions.tablet}px) {
    height: fit-content;
  }
`;

export const Message = styled.h5`
  margin: 0 auto;
  font-family: ${({ theme }) => theme.fontFamilies.Cormorant};
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  font-weight: ${({ theme }) => theme.fontWeights.xl};
  color: ${({ theme }) => theme.colors.CHARCOAL};
`;

export const Icon = styled.div`
  margin-left: ${({ theme }) => theme.margins.s}px;
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: ${({ theme }) => theme.dimensions.tablet}px) {
    display: none;
  }
`;
