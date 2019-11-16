import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useListIssuesQuery } from 'generated/graphql';
import { setError, setLoading, addIssues } from 'store/issues/actions';
import ListIssues from './ListIssues';
import { AppState } from 'store';

const Index: React.FC = () => {
  const loadMore = useSelector(
    ({ issues: { loadMoreIssues } }: AppState) => loadMoreIssues
  );

  const { loading, error, data } = useListIssuesQuery({
    variables: { cursor: loadMore },
  })
  ;
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) dispatch(addIssues(data));
  }, [data, dispatch]);

  useEffect(() => {
    if (error) dispatch(setError(error));
  }, [error, dispatch]);

  useEffect(() => {
    dispatch(setLoading(loading));
  }, [loading, dispatch]);

  if (error) {
    dispatch(setError(error));
  }

  if (loading) {
    dispatch(setLoading(loading));
  }

  return <ListIssues />;
};

export default Index;
