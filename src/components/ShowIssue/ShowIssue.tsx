import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from 'store';
import { Typography, makeStyles, Fab, Chip } from '@material-ui/core';
import { AssignmentReturn } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Comments from 'components/Comments';

import styles from './styles';
import moment from 'moment';
import { DATE_FORMAT } from 'const';
const useStyles = makeStyles(styles);

const Index: React.FC = () => {
  const {
    visible,
    loading,
  } = useSelector(({ issues: { visible, loading } }: AppState) => ({
    visible,
    loading,
  }));
  
  const classes = useStyles();

  if (loading || !visible || !visible.repository || !visible.repository.issue) {
    return <Fragment />;
  }

  const Issue = visible.repository.issue;

  return (
    <div className={classes.container}>
      <Fab
        color='secondary'
        size='small'
        component={Link}
        to='/'
        className={classes.return}>
        <AssignmentReturn />
      </Fab>
      <Typography children={Issue.title} variant='h6' />
      <Typography className={classes.info} component='p' variant='caption'>
        Published at: <b>{moment(Issue.publishedAt).format(DATE_FORMAT)}</b>;
        Updated at:
        <b>{moment(Issue.updatedAt).format(DATE_FORMAT)}</b>;
      </Typography>
      <div className={classes.chip}>
        <Chip
          {...(Issue.closed
            ? { label: 'Closed' }
            : { label: 'Open', color: 'primary' })}
        />
      </div>
      <Typography children={Issue.bodyText} className={classes.text} />
      <Comments />
    </div>
  );
};

export default Index;
