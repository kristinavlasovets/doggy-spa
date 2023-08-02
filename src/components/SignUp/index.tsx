import React, { FC } from 'react';
import Newsletter from 'storybook-lib/Newsletter';

import { images } from '@/constants';

import { Image, ImageBack, ImageFrame, Wrapper } from './styles';

const { newsletterImage, newsletterImageBack } = images;

const SignUp: FC = () => (
  <Wrapper>
    <ImageFrame>
      <Newsletter variant="signup" />
      <Image src={newsletterImage} alt="cat" />
    </ImageFrame>
    <ImageBack src={newsletterImageBack} alt="dog" />
  </Wrapper>
);
export default SignUp;
