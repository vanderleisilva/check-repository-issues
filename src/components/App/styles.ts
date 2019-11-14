import { createStyles, Theme } from '@material-ui/core/styles';

export default (theme: Theme) =>
  createStyles({
    '@global': {
      '*': {
        margin: 0,
      },
    },
    appBar: {
      padding: theme.spacing(1),
    },
    container: {
      marginTop: theme.spacing(8),
    },
  });
