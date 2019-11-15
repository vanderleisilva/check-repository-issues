import { createStyles, Theme } from '@material-ui/core/styles';

export default (theme: Theme) =>
  createStyles({
    info: {
      marginBottom: theme.spacing(2),
    },
    container: {
      position: 'relative',
    },
    return: {
      position: 'absolute',
      right: 0
    },
    chip: {
      marginBottom: theme.spacing(2)
    },
    text: {
      marginBottom: theme.spacing(2)
    }
  });
