'use client';

import React, { FC, useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useMyTranslation } from '@/app/i18n/client';
import { timeslots } from '@/constants';
import { paymentMethods } from '@/constants/paymentMethods';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { checkIsDateValid } from '@/utils/checkIsDateValid';
import { setItemToLocalStorage } from '@/utils/setItemToLocalStorage';
import { formSchema } from '@/utils/validationSchemas';
import { yupResolver } from '@hookform/resolvers/yup';

import Modal from './Modal';
import Portal from './Portal';
import {
  Button,
  Checkbox,
  ErrorMessage,
  Icons,
  Input,
  InputBlock,
  InputContainer,
  InputPaymentWrapper,
  InputWrapper,
  ModalWrapper,
  Note,
  Textarea,
  Timeslot,
  TimeslotItem,
  TimeslotList,
  Title,
  Wrapper,
} from './styles';
import { FormInputProps, Value } from './types';

import 'react-calendar/dist/Calendar.css';

const Calendar = dynamic(() => import('react-calendar'), {
  ssr: false,
});

const Form: FC = () => {
  const [value, onChange] = useState<Value>(new Date());
  const [isPortalOpen, setIsPortalOpen] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const { t } = useMyTranslation();

  useEffect(() => {
    setIsPortalOpen(isPortalOpen);
  }, [isPortalOpen]);

  const handleTogglePortal = () => {
    setIsPortalOpen((prevState) => !prevState);
  };

  useOnClickOutside({ handler: handleTogglePortal, ref });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormInputProps>({
    resolver: yupResolver(formSchema),
    mode: 'onChange',
  });

  const handleSendMessage: SubmitHandler<FormInputProps> = (data, e) => {
    e?.preventDefault();

    if (isValid) {
      Object.entries(data).forEach((item) => setItemToLocalStorage(item[0], item[1]));
      handleTogglePortal();
    }

    reset();
  };

  const { isPastDate, chosenDate } = checkIsDateValid(value);

  return (
    <>
      <Wrapper onSubmit={handleSubmit(handleSendMessage)} ref={formRef}>
        <InputWrapper>
          <InputBlock>
            <InputContainer>
              <Input
                type="text"
                {...register('firstName', {
                  required: true,
                })}
                placeholder={t('BookAppointment.firstName')}
              />
              <ErrorMessage>{errors.firstName?.message}</ErrorMessage>
            </InputContainer>
            <InputContainer>
              <Input
                type="text"
                {...register('lastName', {
                  required: true,
                })}
                placeholder={t('BookAppointment.lastName')}
              />
              <ErrorMessage>{errors.lastName?.message}</ErrorMessage>
            </InputContainer>
          </InputBlock>
          <InputBlock>
            <InputContainer>
              <Input
                type="email"
                {...register('email', {
                  required: true,
                })}
                placeholder={t('BookAppointment.email')}
              />
              <ErrorMessage>{errors.email?.message}</ErrorMessage>
            </InputContainer>
            <InputContainer>
              <Input
                type="text"
                {...register('phoneNumber', {
                  required: true,
                })}
                placeholder={t('BookAppointment.phone')}
              />
              <ErrorMessage>{errors.phoneNumber?.message}</ErrorMessage>
            </InputContainer>
          </InputBlock>
          <InputBlock>
            <TimeslotList>
              <Title>
                {!isPastDate ? ` ${t('BookAppointment.timeslot')} ${chosenDate}:` : `${chosenDate}`}
              </Title>
              {!isPastDate &&
                timeslots.map((item) => (
                  <Timeslot key={item}>
                    <Checkbox
                      type="checkbox"
                      value={item}
                      {...register('timeslot', {
                        required: true,
                      })}
                    />
                    <TimeslotItem>{item}</TimeslotItem>
                  </Timeslot>
                ))}
              <ErrorMessage>{errors.timeslot && 'Choose at least one timeslot'}</ErrorMessage>
            </TimeslotList>
            <Calendar onChange={onChange} value={value} />
          </InputBlock>
          <Textarea placeholder={t('BookAppointment.textarea')} />
        </InputWrapper>
        <InputPaymentWrapper>
          <Title>{t('BookAppointment.payment')}</Title>
          <InputBlock>
            <InputContainer>
              <Input
                type="text"
                {...register('creditCardNumber', {
                  required: true,
                })}
                placeholder={t('BookAppointment.creditCard')}
              />
              <ErrorMessage>{errors.creditCardNumber?.message}</ErrorMessage>
            </InputContainer>
          </InputBlock>
          <InputBlock>
            <InputContainer>
              <Input
                type="text"
                {...register('expiryDate', {
                  required: true,
                })}
                placeholder={t('BookAppointment.expiryDate')}
              />
              <ErrorMessage>{errors.expiryDate?.message}</ErrorMessage>
            </InputContainer>
            <InputContainer>
              <Input
                type="text"
                {...register('cvv', {
                  required: true,
                })}
                placeholder={t('BookAppointment.cvv')}
              />
              <ErrorMessage>{errors.cvv?.message}</ErrorMessage>
            </InputContainer>
          </InputBlock>
          <InputBlock>
            <InputContainer>
              <Input
                type="text"
                {...register('nameOnCard', {
                  required: true,
                })}
                placeholder={t('BookAppointment.nameOnCard')}
              />
              <ErrorMessage>{errors.nameOnCard?.message}</ErrorMessage>
            </InputContainer>
          </InputBlock>
        </InputPaymentWrapper>
        <Icons>
          {paymentMethods.map(({ icon, href }) => (
            <a href={href} key={href}>
              {icon}
            </a>
          ))}
        </Icons>
        <Note>{t('BookAppointment.note')}</Note>
        <Button type="submit">{t('BookAppointment.bookButton')}</Button>
      </Wrapper>
      <Portal isPortalOpen={isPortalOpen}>
        <ModalWrapper ref={ref}>
          <Modal />
        </ModalWrapper>
      </Portal>
    </>
  );
};

export default Form;
