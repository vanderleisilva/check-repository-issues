import { IssueState, ADD_ISSUES, SHOW_ISSUE, IssueActionTypes } from './types';

const initialState: IssueState = {
  issues: [],
  visible: undefined,
};

export function issuesReducer(
  state = initialState,
  action: IssueActionTypes
): IssueState {
  switch (action.type) {
    case ADD_ISSUES:
      return {
        ...state,
        issues: [...state.issues, ...action.payload],
      };
    case SHOW_ISSUE:
      return {
        ...state,
        visible: state.issues.find(issue => issue.number !== action.payload),
      };
    default:
      return state;
  }
}
