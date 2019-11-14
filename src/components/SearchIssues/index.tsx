import React from 'react';
import {
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  makeStyles,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';
import SearchIcon from '@material-ui/icons/Search';

import styles from './styles';
const useStyles = makeStyles(styles);

const SearchIssues: React.FC = () => {
  const filter = useSelector(({ issues: { filter } }: AppState) => filter);
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div>
        <TextField
          label='Search for an issue'
          className={classes.textField}
          value={filter.key}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start' children={<SearchIcon />} />
            ),
          }}
        />

        <FormControl style={{ minWidth: 120 }}>
          <InputLabel children='Status' />
          <Select value={filter.status}>
            <MenuItem value={undefined} children='All' />
            <MenuItem value='1' children='Open' />
            <MenuItem value='0' children='Close' />
          </Select>
        </FormControl>
      </div>

      <Button variant='contained' children='search' color='primary' />
    </div>
  );
};

export default SearchIssues;
