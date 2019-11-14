import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { GRAPHQL_URL, GITHUB_TOKEN } from '../constants';

export default new ApolloClient({
  link: new HttpLink({
    uri: GRAPHQL_URL,
    credentials: 'omit',
    headers: {
      authorization: `bearer ${GITHUB_TOKEN}`,
    },
  }),
  cache: new InMemoryCache(),
});
