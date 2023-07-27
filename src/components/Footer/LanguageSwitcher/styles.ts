import { styled } from 'styled-components';

export const Switcher = styled.div`
  margin-left: ${({ theme }) => theme.margins.s}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ theme }) => theme.width.xs}px;
  font-family: ${({ theme }) => theme.fontFamilies.Cinzel};
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.xl};
  color: ${({ theme }) => theme.colors.CHARCOAL};
  text-transform: uppercase;

  transition: all 1s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
