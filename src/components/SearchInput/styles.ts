import Image from 'next/image';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 90%;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: transparent;
`;

export const Input = styled.input`
  position: relative;
  width: ${({ theme }) => theme.width.sm}px;
  height: ${({ theme }) => theme.height.ss}px;
  padding: ${({ theme }) => theme.paddings.xs}px;
  background-color: ${({ theme }) => theme.colors.WHITE};
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  border: ${({ theme }) => theme.borders.xxs}px solid ${({ theme }) => theme.colors.GRAY};
  border-radius: ${({ theme }) => theme.borderRadiuses.s}px;
  color: ${({ theme }) => theme.colors.CHARCOAL};

  &::placeholder {
    color: ${({ theme }) => theme.colors.CHARCOAL};
  }

  &:focus {
    border: ${({ theme }) => theme.borders.xxs}px solid ${({ theme }) => theme.colors.LIGHT_PINK};
  }

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    width: ${({ theme }) => theme.width.ssm}px;
  }
`;

export const List = styled.ul`
  width: ${({ theme }) => theme.width.sm}px;
  max-height: 400px;
  position: absolute;
  top: 52px;
  background-color: ${({ theme }) => theme.colors.WHITE};
  overflow: scroll;
  border: ${({ theme }) => theme.borders.xxs}px solid ${({ theme }) => theme.colors.GRAY};
  border-radius: ${({ theme }) => theme.borderRadiuses.s}px;
  z-index: ${({ theme }) => theme.zIndexes.s};

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    width: ${({ theme }) => theme.width.ssm}px;
  }
`;

export const Item = styled.li`
  padding: 0 ${({ theme }) => theme.paddings.xs}px 0 ${({ theme }) => theme.paddings.xs}px;
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  font-weight: ${({ theme }) => theme.fontWeights.xl};
  color: ${({ theme }) => theme.colors.CHARCOAL};
  cursor: pointer;
  transition: all 0.8s;

  &:hover {
    color: ${({ theme }) => theme.colors.ROSIE};
  }

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    font-size: ${({ theme }) => theme.fontSizes.xs}px;
    font-weight: ${({ theme }) => theme.fontWeights.s};
  }
`;

export const ImageWrapper = styled(Image)`
  position: absolute;
  top: 15px;
  right: 10px;
  cursor: pointer;
`;
