import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useShowIssueQuery } from '../../generated/graphql';
import { setError, setLoading, showIssue } from '../../store/issues/actions';
import ShowIssue from './ShowIssue';
import { useParams } from 'react-router-dom';
import { AppState } from '../../store';

const Index: React.FC = () => {
  const { number } = useParams();
  const loadMore = useSelector(
    ({ issues: { loadMoreComments } }: AppState) => loadMoreComments
  );
  const { loading, error, data } = useShowIssueQuery({
    variables: { number: Number(number), cursor: loadMore },
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) dispatch(showIssue(data));
  }, [data]);

  useEffect(() => {
    if (error) dispatch(setError(error));
  }, [error]);

  useEffect(() => {
    dispatch(setLoading(loading));
  }, [loading]);

  return <ShowIssue />;
};

export default Index;
