import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from 'store';
import React from 'react';
import { LinearProgress } from '@material-ui/core';

const Loading: React.FC = () => {
  const isLoading = useSelector(({ issues: { loading } }: AppState) => loading);
  return isLoading ? <LinearProgress variant="query" color="secondary" /> : <Fragment />;
};

export default Loading;
