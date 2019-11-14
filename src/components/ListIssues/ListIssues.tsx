import React, { Fragment } from 'react';
import { AppState } from '../../store';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
import SearchIssues from '../SearchIssues';

const ListIssues: React.FC = () => {
  const list = useSelector(({ issues: { list } }: AppState) => list);
  const headers: string[] = ['Title', 'Updated at', 'Status', ''];

  if (!list || !list.repository || !list.repository.issues.edges) {
    return <Fragment />;
  }

  return (
    <Fragment>
      <Typography children='List Issues' variant='h5' />
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
                <TableCell children={l.node.updatedAt} />
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
    </Fragment>
  );
};

export default ListIssues;
