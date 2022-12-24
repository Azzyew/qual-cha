import { gql } from 'graphql-request';

export const GET_TEAS = gql`
  query getTeas {
    teas {
      id
      scientificName
      slug
      commonName
      goodFor
      image {
        url
      }
    }
  }
`;

export const GET_TEA_BY_SLUG = gql`
  query getTeaBySlug($slug: String!) {
    teas(where: { slug: $slug }) {
      id
      scientificName
      slug
      commonName
      goodFor
      image {
        url
      }
    }
  }
`;
