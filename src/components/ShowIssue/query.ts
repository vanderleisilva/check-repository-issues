import gql from 'graphql-tag';

export const QUERY_LAUNCH_LIST = gql`
  query ShowIssue($id: Int!) {
    repository(owner: "facebook", name: "react") {
      issue(number: $id) {
        comments(last: 20) {
          totalCount
          edges {
            node {
              bodyText
              publishedAt
              author {
                avatarUrl
                login
              }
            }
          }
        }
      }
    }
  }
`;
