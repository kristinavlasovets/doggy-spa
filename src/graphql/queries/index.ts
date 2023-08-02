import { gql } from '@apollo/client';

export const GET_BY_BREED = gql`
  query ($name: String!) {
    getByBreed(name: $name) {
      image_link
      name
      energy
      min_life_expectancy
      good_with_strangers
      good_with_other_dogs
    }
  }
`;

export const GET_BY_SEARCH = gql`
  query ($name: String!) {
    getByBreed(name: $name) {
      name
    }
  }
`;
