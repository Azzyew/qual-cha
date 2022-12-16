import gql from 'graphql-tag';

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

export const GET_TEA = gql`
  query getTea($scientificName: String!) {
    pages(scientificName: $scientificName) {
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
