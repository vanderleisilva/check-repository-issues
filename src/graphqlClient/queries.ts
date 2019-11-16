import gql from 'graphql-tag';

export const QUERY_SHOW_ISSUE = gql`
  query ShowIssue($number: Int!, $cursor: String) {
    repository(owner: "facebook", name: "react") {
      issue(number: $number) {
        title
        bodyText
        number
        publishedAt
        updatedAt
        closed
        comments(last: 20, before: $cursor) {
          pageInfo {
            endCursor
            hasPreviousPage
          }
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
  query ListIssues($cursor: String) {
    repository(owner: "facebook", name: "react") {
      issues(last: 20, before: $cursor) {
        pageInfo {
          endCursor
          hasPreviousPage
        }
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
