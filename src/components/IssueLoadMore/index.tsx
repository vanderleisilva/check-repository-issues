import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store';
import { Button, makeStyles } from '@material-ui/core';

import styles from './styles';
import { loadMoreIssues } from '../../store/issues/actions';
const useStyles = makeStyles(styles);

const IssueLoadMore: React.FC = () => {
  const list = useSelector(({ issues: { list } }: AppState) => list);
  const classes = useStyles();
  const dispatch = useDispatch();

  if (
    !list ||
    !list.repository ||
    !list.repository.issues.pageInfo.hasPreviousPage ||
    !list.repository.issues.pageInfo.endCursor
  ) {
    return <Fragment />;
  }

  const { endCursor } = list.repository.issues.pageInfo;

  return (
    <div className={classes.container}>
      <Button
        variant='contained'
        onClick={() => dispatch(loadMoreIssues(endCursor))}
        children='Load more'
        color='primary'
      />
    </div>
  );
};

export default IssueLoadMore;
