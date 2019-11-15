import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';
import moment from 'moment';
import { DATE_FORMAT } from '../../constants';
import {
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  Avatar,
} from '@material-ui/core';

const Comments: React.FC = () => {
  const selected = useSelector(({ issues: { visible } }: AppState) => visible);
  const headers: string[] = ['Author', 'Published at', 'Comment'];

  if (
    !selected ||
    !selected.repository ||
    !selected.repository.issue ||
    !selected.repository.issue.comments ||
    !selected.repository.issue.comments.totalCount ||
    !selected.repository.issue.comments.edges
  ) {
    return <Fragment />;
  }

  const comments = selected.repository.issue.comments.edges;

  return (
    <Fragment>
      <Typography children='Comments' variant='h6' />
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((h, i) => (
              <TableCell key={i} children={h} />
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {comments.map((l, i) =>
            l && l.node ? (
              <TableRow key={i}>
                <TableCell>
                  <Chip
                    label={(l.node.author || {}).login}
                    avatar={
                      <Avatar  src={(l.node.author || {}).avatarUrl} />
                    }
                  />
                </TableCell>

                <TableCell children={moment(l.node.publishedAt).format(DATE_FORMAT)} />
                <TableCell children={l.node.bodyText} />
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

export default Comments;
