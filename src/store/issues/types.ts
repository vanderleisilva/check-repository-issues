export interface Issue {
  title: string;
  bodyText: string;
  number: number;
}

export interface IssueState {
  issues: Issue[];
  visible?: Issue;
}

export const ADD_ISSUES = 'ADD_ISSUES';
export const SHOW_ISSUE = 'SHOW_ISSUE';

interface AddIssuesAction {
  type: typeof ADD_ISSUES;
  payload: Issue[];
}

interface ShowIssueAction {
  type: typeof SHOW_ISSUE;
  payload: number;
}

export type IssueActionTypes = AddIssuesAction | ShowIssueAction;
