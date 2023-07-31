import React, { FC } from 'react';

import Newsletter from '../Newsletter';

import { Image, ImageBack, ImageFrame, Wrapper } from './styles';

const SignUp: FC = () => (
  <Wrapper>
    <ImageFrame>
      <Newsletter variant="signup" />
      <Image src="../assets/images/newsletter-cat.png" alt="cat" />
    </ImageFrame>
    <ImageBack src="../assets/images/newsletter-dog.png" alt="dog" />
  </Wrapper>
);
export default SignUp;
