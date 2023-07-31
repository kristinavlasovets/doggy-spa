import { styled } from 'styled-components';

export const Wrapper = styled.form`
  margin: ${({ theme }) => theme.margins.xxxs} auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: ${({ theme }) => theme.margins.xxxs} auto;
  padding: ${({ theme }) => theme.paddings.xs}px;

  @media (max-width: ${({ theme }) => theme.dimensions.tablet}px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const InputContainer = styled.div`
  margin-right: ${({ theme }) => theme.margins.xxs}px;
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.width.s}%;
`;

export const ModalWrapper = styled.div``;

export const InputPaymentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${({ theme }) => theme.width.m}px;
  margin: ${({ theme }) => theme.margins.xxxs} auto;
  padding: ${({ theme }) => theme.paddings.xs}px;

  @media (max-width: ${({ theme }) => theme.dimensions.tablet}px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const InputBlock = styled.div`
  margin-bottom: ${({ theme }) => theme.margins.xxs}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TimeslotList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Timeslot = styled.div`
  margin-bottom: ${({ theme }) => theme.margins.xxs}px;
  display: flex;
`;

export const Input = styled.input`
  margin-left: ${({ theme }) => theme.margins.xxs}px;
  width: ${({ theme }) => theme.width.s}%;
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
`;

export const Checkbox = styled.input`
  width: ${({ theme }) => theme.width.xxs}px;
  height: ${({ theme }) => theme.height.xss}px;
  background-color: ${({ theme }) => theme.colors.WHITE};
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  border: ${({ theme }) => theme.borders.xxs}px solid ${({ theme }) => theme.colors.GRAY};
  border-radius: ${({ theme }) => theme.borderRadiuses.s}px;
  color: ${({ theme }) => theme.colors.WHITE};
  accent-color: ${({ theme }) => theme.colors.PINK};

  &:checked {
    background-color: ${({ theme }) => theme.colors.BEIGE};
    border: ${({ theme }) => theme.borders.xxs}px solid ${({ theme }) => theme.colors.BEIGE};
    border-radius: ${({ theme }) => theme.borderRadiuses.s}px;
  }
`;

export const Title = styled.h5`
  margin-top: ${({ theme }) => theme.margins.xs}px;
  margin-bottom: ${({ theme }) => theme.margins.s}px;
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamilies.cormorant};
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.xl};
  color: ${({ theme }) => theme.colors.CHARCOAL};
`;

export const TimeslotItem = styled.p`
  margin-left: ${({ theme }) => theme.margins.xxs}px;
  font-family: ${({ theme }) => theme.fontFamilies.cormorant};
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.s};
  color: ${({ theme }) => theme.colors.CHARCOAL};
`;

export const Textarea = styled.textarea`
  width: ${({ theme }) => theme.width.mm}px;
  height: ${({ theme }) => theme.height.sm}px;
  padding: ${({ theme }) => theme.paddings.xs}px;
  background-color: ${({ theme }) => theme.colors.WHITE};
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  border: ${({ theme }) => theme.borders.xxs}px solid ${({ theme }) => theme.colors.GRAY};
  border-radius: ${({ theme }) => theme.borderRadiuses.s}px;
  color: ${({ theme }) => theme.colors.CHARCOAL};

  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.CHARCOAL};
  }

  &:focus {
    border: ${({ theme }) => theme.borders.xxs}px solid ${({ theme }) => theme.colors.LIGHT_PINK};
  }
`;

export const Button = styled.button`
  width: ${({ theme }) => theme.width.sm}px;
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
    transform: translateX(10px);
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
    width: ${({ theme }) => theme.width.s}px;
  }
`;

export const Note = styled.p`
  margin-bottom: ${({ theme }) => theme.margins.s}px;
  color: ${({ theme }) => theme.colors.CHARCOAL};
  width: ${({ theme }) => theme.width.m}px;
  text-align: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.PINK};
  }
`;

export const ErrorMessage = styled.p`
  margin-left: ${({ theme }) => theme.margins.xxs}px;
  margin-top: ${({ theme }) => theme.margins.xxs}px;
  color: ${({ theme }) => theme.colors.CHARCOAL};
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.PINK};
  }
`;
