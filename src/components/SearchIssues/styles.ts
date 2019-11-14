import { createStyles, Theme } from '@material-ui/core/styles';

export default (theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
      alignItems: 'flex-end'
    },
    textField: {
      marginRight: theme.spacing(2),
      width: 320
    },
  });
