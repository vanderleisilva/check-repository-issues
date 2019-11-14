import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useListIssuesQuery } from '../../generated/graphql';
import { setError, setLoading, addIssues } from '../../store/issues/actions';
import ListIssues from './ListIssues';

const Index: React.FC = () => {
  const { loading, error, data } = useListIssuesQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) dispatch(addIssues(data));
  }, [data]);

  useEffect(() => {
    if (error) dispatch(setError(error));
  }, [error]);

  useEffect(() => {
    dispatch(setLoading(loading));
  }, [loading]);

  if (error) {
    dispatch(setError(error));
  }

  if (loading) {
    dispatch(setLoading(loading));
  }

  return <ListIssues />;
};

export default Index;
