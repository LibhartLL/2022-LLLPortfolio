import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  timeLine: {
    position: 'relative',
    padding: '1rem',
    margin: 'o auto',
    '&:before': {
      content: "''",
      position: 'absolute',
      height: '100%',
      border: '1px solid #F7A579',
      right: '40px',
      top: 0,
    },
    '&:after': {
      content: "''",
      display: 'table',
      clear: 'both',
    },
    [theme.breakpoints.up('md')]: {
      padding: '2rem',
      '&:before': {
        left: 'calc(50% - 1px)',
        right: 'auto',
      },
    },
  },
  timeLineItem: {
    padding: '1rem',
    borderBottom: '2px solid #F7a579',
    position: 'relative',
    margin: '1rem 3rem 1rem 1rem',
    clear: 'both',
    '&:after': {
      content: "''",
      position: 'absolute',
    },
    '&:before': {
      content: "''",
      position: 'absolute',
      right: '-0.625rem',
      top: 'calc(50% - 5px)',
      borderStyle: 'solid',
      borderColor: '#06114F #06114F transparent transparent',
      borderWidth: '0.625rem',
      transform: 'rotate(45deg)',
    },
    [theme.breakpoints.up('md')]: {
      width: '44%',
      margin: '1rem',
      '&:nth-of-type(2n)': {
        float: 'right',
        margin: '1rem',
        borderColor: 'F7A579',
      },
      '&:nth-of-type(2n):before': {
        right: 'auto',
        left: '-0.625rem',
        borderColor: 'transparent transparent #06114F #06114F',
      },
    },
  },
  timeLineYear: {
    textAlign: 'center',
    maxWidth: '9.375rem',
    margin: '0 3rem 0 auto',
    fontSize: '1.2rem',
    color: '#06114F',
    background: '#56B6C4',
    lineHeight: 1,
    padding: '0.5rem 1rem',
    '&:before': {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'center',
      margin: '0 auto',
      '&:nth-of-type(2n)': {
        float: 'none',
        margin: '0 auto',
      },
      '&:nth-of-type(2n):before': {
        display: 'none',
      },
    },
  },
  heading: {
    color: '#06114F',
    padding: '3rem 0',
    textTransform: 'uppercase',
  },
  subHeading: {
    color: '#06114F',
    padding: 0,
    textTransform: 'uppercase',
  },
  body1: {
    color: '#1B7979',
  },
  subtitle1: {
    color: '#6F3096',
  },
}));