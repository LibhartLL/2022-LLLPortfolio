import { makeStyles, TextField, withStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  contactContainer: {
    height: '100vh',
  },
  heading: {
    color: '#6f3096',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: '1rem',
  },
  form: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
  },
  input: {
    color: '#06114F',
  },
  button: {
    marginTop: '1rem',
    color: '#6f3096',
    borderColor: '#6f3096',
  },
  field: {
    margin: '1rem 0rem',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #F7A579',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export const InputField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#31525B',
    },
    '& label': {
      color: '#06114F',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#6f3096',
      },
      '&:hover fieldset': {
        borderColor: '#6f3096',
      },
      '&.Mui-focused fieldset': {
        color: '#6f3096',
        borderColor: '#6f3096',
      },
    },
  },
})(TextField);