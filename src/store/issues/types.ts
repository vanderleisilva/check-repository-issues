import { ListIssuesQuery, ShowIssueQuery } from '../../generated/graphql';

export interface IssueFilter {
  key: string;
  status?: boolean;
}

export interface IssueState {
  list?: ListIssuesQuery;
  visible?: ShowIssueQuery;
  filter: IssueFilter;
  loading: boolean;
  loadMoreIssues: string;
  loadMoreComments: string;
  error: string;
}

export const ADD_ISSUES = 'ADD_ISSUES';
export const SHOW_ISSUE = 'SHOW_ISSUE';
export const FILTER_ISSUE = 'FILTER_ISSUE';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const LOAD_MORE_ISSUES = 'LOAD_MORE_ISSUES';
export const LOAD_MORE_COMMENTS = 'LOAD_MORE_COMMENTS';

export interface AddIssuesAction {
  type: typeof ADD_ISSUES;
  payload: ListIssuesQuery;
}

export interface SetLoadingAction {
  type: typeof SET_LOADING;
  payload: boolean;
}

export interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}

export interface ShowIssueAction {
  type: typeof SHOW_ISSUE;
  payload: ShowIssueQuery;
}

export interface FilterIssueAction {
  type: typeof FILTER_ISSUE;
  payload: IssueFilter;
}

export interface LoadMoreCommentsAction {
  type: typeof LOAD_MORE_COMMENTS;
  payload: string;
}

export interface loadMoreIssuesAction {
  type: typeof LOAD_MORE_ISSUES;
  payload: string;
}

export type IssueActionTypes =
  | AddIssuesAction
  | ShowIssueAction
  | FilterIssueAction
  | SetErrorAction
  | SetLoadingAction
  | loadMoreIssuesAction
  | LoadMoreCommentsAction;
