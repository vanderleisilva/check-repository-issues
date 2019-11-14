import gql from 'graphql-tag';

export const QUERY_SHOW_ISSUE = gql`
  query ShowIssue($number: Int!) {
    repository(owner: "facebook", name: "react") {
      issue(number: $number) {
        title
        bodyText
        number
        publishedAt
        updatedAt
        closed
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

export const QUERY_LIST_ISSUES = gql`
  query ListIssues {
    repository(owner: "facebook", name: "react") {
      issues(last: 20) {
        totalCount
        edges {
          node {
            title
            number
            publishedAt
            updatedAt
            closed
          }
        }
      }
    }
  }
`;
