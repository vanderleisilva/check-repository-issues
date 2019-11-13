import React from 'react';
import { AppState } from '../../store';
import { filterIssue } from '../../store/issues/actions';
import { IssueFilter } from '../../store/issues/types';
import { connect } from 'react-redux';
import {
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const mapStateToProps = ({ issues: { filter } }: AppState) => ({
  filter,
});

interface Props {
  filter: IssueFilter;
  filterIssue: typeof filterIssue;
}

const SearchIssues: React.FC<Props> = ({ filter, filterIssue }) => {
  const handleKey = (e: React.ChangeEvent<{ value: unknown }>) => {
    filterIssue({
      ...filter,
      key: e.target.value as string,
    });
  };

  const handleStatus = (e: React.ChangeEvent<{ value: unknown }>) => {
    let value: unknown = e.target.value;
    filterIssue({
      ...filter,
      status: value !== undefined ? value === '1' : undefined,
    });
  };

  return (
    <div>
      <TextField
        label='Search for an issue'
        variant='outlined'
        onChange={handleKey}
        value={filter.key}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start' children={<SearchIcon />} />
          ),
        }}
      />

      <FormControl variant='outlined' style={{ minWidth: 120 }}>
        <InputLabel children='Status' />
        <Select value={filter.status} onChange={handleStatus}>
          <MenuItem value={undefined} children='All' />
          <MenuItem value='1' children='Open' />
          <MenuItem value='0' children='Close' />
        </Select>
      </FormControl>

      <Button variant='contained' children='search' size='large' />
    </div>
  );
};

export default connect(
  mapStateToProps,
  { filterIssue }
)(SearchIssues);
