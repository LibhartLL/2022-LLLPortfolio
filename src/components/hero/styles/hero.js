import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  avater: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    margin: theme.spacing(1),
  },
  title: {
    color: '#06114F',
  },
  subtitle: {
    color: '#9567e0',
    marginBottom: '3rem',
  },
  typedContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100vw',
    textAlign: 'center',
    zIndex: 1,
  },
}));