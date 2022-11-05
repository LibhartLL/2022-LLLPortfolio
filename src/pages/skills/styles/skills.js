import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  heading: {
    color: '#06114F',
    paddingTop: '1.5rem',
    marginBottom: '1.5rem',
    textTransform: 'uppercase',
  },
  mainContainer: {
    height: '100%',
    padding: '1rem',
  },
  cardContainer: {
    maxWidth: 450,
    margin: '0.2rem auto',
    boxShadow:
      '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',

    '&:hover': {
      msTransform: 'scale(1.2)',
      webkitTransform: 'scale(1.2)',
      transform: 'scale(1.05)',
      backfaceVisibility: 'hidden',
      // transform: 'translateZ(0)',
      transitionProperty: 'transform',
      transitionDuration: '0.25s',
      transitionTimingFunction: 'ease-out',
      transitionDelay: '0s',
    },
  },
  projectName: {
    color: '#06114F',
    fontSize: '20px',
  },
  language: {
    background: '#F7A579',
    margin: '1.5rem auto',
    borderRadius: '0.5rem ',
    padding: '1.5rem',
  },
  languageView: {
    display: 'flex',
    color: '#06114F',
  },
});