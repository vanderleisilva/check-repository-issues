import React from 'react';
import { AppState } from '../../store';
import SearchIssues from '../SearchIssues';
import { Issue } from '../../store/issues/types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Typography,
  TableCell,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Button,
} from '@material-ui/core';

const mapStateToProps = ({ issues: { list } }: AppState) => ({
  list,
});

interface Props {
  list: Issue[];
}

const ListIssues: React.FC<Props> = ({ list }) => {
  const headers: string[] = ['Title', 'See'];

  return (
    <div>
      <Typography children='List Issues' variant='h6' />
      <SearchIssues />
      {list.length === 0 ? (
        <Typography children='No issues found' />
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              {headers.map(h => (
                <TableCell children={h} />
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map(l => (
              <TableRow>
                <TableCell children={l.title} />
                <TableCell
                  children={
                    <Button
                      children='Visualize'
                      component={Link}
                      to={`/show/${l.number}`}
                    />
                  }
                />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default connect(mapStateToProps)(ListIssues);
