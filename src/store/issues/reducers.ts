import {
  IssueState,
  ADD_ISSUES,
  SHOW_ISSUE,
  FILTER_ISSUE,
  SET_ERROR,
  SET_LOADING,
  IssueActionTypes,
  LOAD_MORE_COMMENTS,
  LOAD_MORE_ISSUES,
} from './types';

import _merge from 'lodash.mergewith';

const initialState: IssueState = {
  list: undefined,
  visible: undefined,
  filter: {
    key: '',
    status: undefined,
  },
  error: '',
  loading: false,
  loadMoreComments: '',
  loadMoreIssues: '',
};

export function issuesReducer(
  state = initialState,
  action: IssueActionTypes
): IssueState {
  switch (action.type) {
    case ADD_ISSUES:
      return {
        ...state,
        list: _merge({}, state.list, action.payload, (obj, src) => Array.isArray(obj) ? obj.concat(src) : undefined ),
      };
    case SHOW_ISSUE:
      return {
        ...state,
        visible: action.payload,
      };
    case FILTER_ISSUE:
      return {
        ...state,
        filter: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case LOAD_MORE_COMMENTS:
      return {
        ...state,
        loadMoreComments: action.payload,
      };
    case LOAD_MORE_ISSUES:
      return {
        ...state,
        loadMoreIssues: action.payload,
      };
    default:
      return state;
  }
}
