import gql from 'graphql-tag';

export const QUERY_LAUNCH_LIST = gql`
  query ListIssues {
    repository(owner: "facebook", name: "react") {
      issues(last: 20) {
        totalCount
        edges {
          node {
            title
            bodyText
            closed
          }
        }
      }
    }
  }
`;
