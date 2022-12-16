import { useQuery } from 'react-query';
import { GraphQLClient } from 'graphql-request';

export const useGQLQuery = (key, query, variables, config = {}) => {
  const endpoint = process.env.GRAPHCMS_HOST;
  const headers = {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  };

  const graphQLClient = new GraphQLClient(endpoint, headers);

  const fetchData = async () => await graphQLClient.request(query, variables);

  return useQuery(key, fetchData, config);
};
