import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';
import { Typography, makeStyles } from '@material-ui/core';
import Comments from '../Comments';

import styles from './styles';
const useStyles = makeStyles(styles);

const Index: React.FC = () => {
  const selected = useSelector(({ issues: { visible } }: AppState) => visible);
  const classes = useStyles();

  if (!selected || !selected.repository || !selected.repository.issue) {
    return <Fragment />;
  }

  const Issue = selected.repository.issue;

  return (
    <Fragment>
      <Typography children={Issue.title} variant='h6' />
      <Typography className={classes.info} component='p' variant='caption'>
        Published at: <b>{Issue.publishedAt}</b>;
        Updated at: <b>{Issue.updatedAt}</b>;
      </Typography>
      <Typography children={Issue.bodyText} />
      <Comments />
    </Fragment>
  );
};

export default Index;
