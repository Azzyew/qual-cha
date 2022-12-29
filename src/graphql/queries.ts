import { gql } from 'graphql-request';

export const GET_TEAS = gql`
  query getTeas {
    teas {
      id
      scientificName
      slug
      commonName
      symptoms
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
      symptoms
      image {
        url
      }
    }
  }
`;

export const GET_TEAS_BY_SYMPTOMS = gql`
  query getTeasBySymptoms($symptoms: [String!]) {
    teas(where: { symptoms_contains_all: $symptoms }) {
      id
      scientificName
      slug
      commonName
      symptoms
      image {
        url
      }
    }
  }
`;
