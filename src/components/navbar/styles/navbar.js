import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  menuSlide: {
    width: 250,
    background:
      'linear-gradient(90deg,rgb(209,177,226) 15%,rgb(133, 207, 228) 100%,rgb(119, 204, 214) 100%)',
    height: '100%',
  },
  myImage: {
    display: 'block',
    margin: '0.5rem auto',
    width: theme.spacing(14),
    height: theme.spacing(14),
  },
  listText: {
    color: '#06114F',
  },
  listIcon: {
    color: '#6f3096',
  },
}));