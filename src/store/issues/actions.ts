import {
  IssueFilter,
  ADD_ISSUES,
  SHOW_ISSUE,
  FILTER_ISSUE,
  SET_ERROR,
  SET_LOADING,
  LOAD_MORE_COMMENTS,
  LOAD_MORE_ISSUES
} from './types';

import { ListIssuesQuery, ShowIssueQuery } from 'generated/graphql';
import { ApolloError } from 'apollo-boost';

export const addIssues = (payload: ListIssuesQuery) => ({
  type: ADD_ISSUES,
  payload,
});

export const showIssue = (payload: ShowIssueQuery) => ({
  type: SHOW_ISSUE,
  payload,
});

export const setLoading = (payload: boolean) => ({
  type: SET_LOADING,
  payload,
});

export const setError = (payload: ApolloError) => ({
  type: SET_ERROR,
  payload,
});

export const filterIssue = (payload: IssueFilter) => ({
  type: FILTER_ISSUE,
  payload,
});

export const loadMoreComments = (payload: string) => ({
  type: LOAD_MORE_COMMENTS,
  payload,
});

export const loadMoreIssues = (payload: string) => ({
  type: LOAD_MORE_ISSUES,
  payload,
});
