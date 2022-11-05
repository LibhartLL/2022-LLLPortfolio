import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  root: {
    '& .MuiBottomNavigationAction-root': {
      MinWidth: 0,
      maxWidth: 50,
    },
    '& .MuiSvgIcon-root': {
      fill: '#06114F',
      '&:hover': {
        fill: '#56B6c4',
        fontSize: '1.8rem',
      },
    },
  },
});