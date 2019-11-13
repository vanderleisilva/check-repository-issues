import { Issue, ADD_ISSUES, SHOW_ISSUE } from './types';

export const addIssues = (payload: Issue[]) => ({
  type: ADD_ISSUES,
  payload,
});

export const showIssue = (payload: number) => ({
  type: SHOW_ISSUE,
  payload,
});
