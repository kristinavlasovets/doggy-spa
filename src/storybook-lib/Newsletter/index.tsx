'use client';

import React, { FC, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useMyTranslation } from '@/app/i18n/client';
import { envVariables } from '@/constants';
import { newsletterSchema } from '@/utils';
import emailjs from '@emailjs/browser';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  Alert,
  Button,
  ErrorMessage,
  Form,
  Input,
  InputWrapper,
  Main,
  Note,
  Subtitle,
  Title,
  Wrapper,
} from './styles';
import { NewsletterInputProps, NewsletterProps } from './types';

const Newsletter: FC<NewsletterProps> = ({ variant }) => {
  const [alertText, setAlertText] = useState<string>('');

  const formRef = useRef<HTMLFormElement>(null);

  const { t } = useMyTranslation();

  const signUpVariant = variant === 'signup';

  const { emailJSServiceId, emailJSNewsletterTemplate, emailJSPublicKey } = envVariables;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterInputProps>({
    resolver: yupResolver(newsletterSchema),
    mode: 'onChange',
  });

  const handleSubscribe: SubmitHandler<NewsletterInputProps> = () => {
    emailjs
      .sendForm(
        emailJSServiceId,
        emailJSNewsletterTemplate,
        formRef.current as HTMLFormElement,
        emailJSPublicKey
      )
      .then(
        (result) => {
          if (result.text === 'OK') {
            setAlertText(t('Footer.subscribedAlert'));
          }
        },
        (error) => {
          setAlertText(error.text);
        }
      );

    reset();
  };

  const handleCloseAlert = () => {
    setAlertText('');
  };

  return (
    <Wrapper onSubmit={handleSubmit(handleSubscribe)} ref={formRef}>
      <Form signUpVariant={signUpVariant}>
        {signUpVariant && <Title>{t('Home.newsletterTitle')}</Title>}
        <Subtitle signUpVariant={signUpVariant}>
          {signUpVariant ? t('Home.newsletterSubtitle') : t('Newsletter.title')}
        </Subtitle>
        <Main signUpVariant={signUpVariant}>
          <InputWrapper signUpVariant={signUpVariant}>
            {alertText && (
              <Alert type="button" onClick={handleCloseAlert}>
                {alertText}
              </Alert>
            )}
            <Input
              signUpVariant={signUpVariant}
              type="email"
              {...register('email', {
                required: true,
              })}
              placeholder={t('Newsletter.placeholder')}
            />
          </InputWrapper>
          <Button type="submit">
            {signUpVariant ? t('Home.newsletterButton') : t('Newsletter.button')}
          </Button>
          {signUpVariant && <Note>{t('Home.newsletterNote')}</Note>}
        </Main>
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
      </Form>
    </Wrapper>
  );
};

export default Newsletter;
