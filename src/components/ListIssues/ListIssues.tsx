import React, { Fragment } from 'react';
import { AppState } from 'store';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import {
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Chip,
} from '@material-ui/core';

import SearchIssues from 'components/SearchIssues';
import IssueLoadMore from 'components/IssueLoadMore';
import { DATE_FORMAT } from 'const';

const ListIssues: React.FC = () => {
  const list = useSelector(({ issues: { list } }: AppState) => list);
  const headers: string[] = ['Title', 'Updated at', 'Status', ''];

  if (!list || !list.repository || !list.repository.issues.edges) {
    return <Fragment />;
  }

  return (
    <Fragment>
      <Typography children='Issues' variant='h5' />
      <Typography children={`${list.repository.issues.totalCount} issues found`} variant='caption' />
      <SearchIssues />
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((h, i) => (
              <TableCell key={i} children={h} />
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {list.repository.issues.edges.map((l, i) =>
            l && l.node ? (
              <TableRow key={i}>
                <TableCell children={l.node.title} />
                <TableCell children={moment(l.node.updatedAt).format(DATE_FORMAT)} />
                <TableCell
                  children={
                    <Chip
                      {...(l.node.closed
                        ? { label: 'Closed' }
                        : { label: 'Open', color: 'primary' })}
                    />
                  }
                />
                <TableCell
                  children={
                    <Button
                      children='Visualize'
                      variant='outlined'
                      color='primary'
                      component={Link}
                      to={`/show/${l.node.number}`}
                    />
                  }
                />
              </TableRow>
            ) : (
              false
            )
          )}
        </TableBody>
      </Table>
      <IssueLoadMore />
    </Fragment>
  );
};

export default ListIssues;
