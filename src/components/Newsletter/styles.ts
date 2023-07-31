import { styled } from 'styled-components';

import { FormProps } from './types';

export const Wrapper = styled.form`
  background-color: transparent;
`;

export const Form = styled.div<FormProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: ${({ theme }) => theme.margins.xxxs} auto;
  padding: ${({ theme }) => theme.paddings.xs}px;
  width: ${({ theme, signUpVariant }) => (signUpVariant ? theme.width.ssmm : '')}px;

  @media (max-width: ${({ theme }) => theme.dimensions.tablet}px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Title = styled.h3`
  margin-bottom: ${({ theme }) => theme.margins.xxs}px;
  font-family: ${({ theme }) => theme.fontFamilies.cinzelDecorative};
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  font-weight: ${({ theme }) => theme.fontWeights.s};
  color: ${({ theme }) => theme.colors.CHARCOAL};
`;

export const Subtitle = styled.h5<FormProps>`
  font-family: ${({ theme }) => theme.fontFamilies.cormorant};
  font-size: ${({ theme, signUpVariant }) =>
    signUpVariant ? theme.fontSizes.xs : theme.fontSizes.s}px;
  font-weight: ${({ theme, signUpVariant }) =>
    signUpVariant ? theme.fontWeights.l : theme.fontWeights.xl};
  color: ${({ theme }) => theme.colors.CHARCOAL};
`;

export const Note = styled.p`
  text-align: center;
  margin-top: ${({ theme }) => theme.margins.xxs}px;
  font-family: ${({ theme }) => theme.fontFamilies.cormorant};
  font-size: ${({ theme }) => theme.fontSizes.xxs}px;
  font-weight: ${({ theme }) => theme.fontWeights.l};
  color: ${({ theme }) => theme.colors.CHARCOAL};
`;

export const Main = styled.section<FormProps>`
  display: flex;
  flex-direction: ${({ signUpVariant }) => (signUpVariant ? 'column' : '')};
  justify-content: space-evenly;
`;

export const InputWrapper = styled.div<FormProps>`
  position: relative;
  margin-top: ${({ theme, signUpVariant }) => (signUpVariant ? theme.margins.xs : '')}px;
  margin-bottom: ${({ theme, signUpVariant }) => (signUpVariant ? theme.margins.xs : '')}px;
  width: ${({ theme, signUpVariant }) => (signUpVariant ? theme.width.ssmm : theme.width.m)}px;

  @media (max-width: ${({ theme }) => theme.dimensions.tablet}px) {
    margin: ${({ theme }) => theme.margins.xxxs} auto;
    width: ${({ theme }) => theme.width.ssm}px;
    max-width: ${({ theme }) => theme.width.s}%;
  }

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    width: fit-content;
  }
`;

export const Input = styled.input<FormProps>`
  margin-top: ${({ theme }) => theme.margins.xxs}px;
  width: ${({ theme, signUpVariant }) => (signUpVariant ? theme.width.ssmm : theme.width.m)}px;
  height: ${({ theme }) => theme.height.ss}px;
  padding: ${({ theme }) => theme.paddings.xxs}px;
  background-color: ${({ theme }) => theme.colors.WHITE};
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  border: ${({ theme }) => theme.borders.xxs}px solid ${({ theme }) => theme.colors.GRAY};
  border-radius: ${({ theme }) => theme.borderRadiuses.s}px;
  color: ${({ theme }) => theme.colors.CHARCOAL};

  &::placeholder {
    color: ${({ theme }) => theme.colors.CHARCOAL};
    opacity: ${({ theme }) => theme.opacities.s};
  }

  &:focus {
    border: ${({ theme }) => theme.borders.xxs}px solid ${({ theme }) => theme.colors.LIGHT_PINK};
  }
`;

export const Button = styled.button`
  margin-top: ${({ theme }) => theme.margins.xxs}px;
  margin-left: ${({ theme }) => theme.margins.xxs}px;
  width: ${({ theme }) => theme.width.ss}px;
  height: ${({ theme }) => theme.height.xs}px;
  background-color: ${({ theme }) => theme.colors.PINK};
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.xl};
  color: ${({ theme }) => theme.colors.WHITE};
  border: ${({ theme }) => theme.borders.xxs}px solid ${({ theme }) => theme.colors.PINK};
  border-radius: ${({ theme }) => theme.borderRadiuses.m}px;
  cursor: pointer;
  transition: transform 250ms;

  &:hover {
    opacity: ${({ theme }) => theme.opacities.m};
    transform: translateX(-10px);
  }

  @media (max-width: ${({ theme }) => theme.dimensions.tablet}px) {
    margin: ${({ theme }) => theme.margins.xxxs} auto;
    width: ${({ theme }) => theme.width.ssm}px;
    max-width: ${({ theme }) => theme.width.ssss}px;
  }
`;

export const Alert = styled.button`
  position: fixed;
  bottom: 15%;
  right: 5%;
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.paddings.xxs}px;
  background-color: ${({ theme }) => theme.colors.PINK};
  color: ${({ theme }) => theme.colors.WHITE};
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  font-weight: ${({ theme }) => theme.fontWeights.xl};
  border-radius: ${({ theme }) => theme.borderRadiuses.s}px;
  border: none;
  cursor: pointer;

  z-index: ${({ theme }) => theme.zIndexes.s};
`;

export const ErrorMessage = styled.p`
  margin-top: ${({ theme }) => theme.margins.xxs}px;
  color: ${({ theme }) => theme.colors.CHARCOAL};
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.WHITE};
  }
`;
