import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useStyles } from './styles/footer';

function Footer() {
  const classes = useStyles();
  return (
    <div width="auto" style={{ background: '#56b6c4' }}>
      <Typography className={classes.root} style={{ color: '#06114F' }}>
        Made with <span> </span>
        <img
          src="https://twemoji.maxcdn.com/2/72x72/2764.png"
          alt="love"
          className={classes.love}
        />
        <span> </span>
        by Lindsay L. Libhart, 2022
      </Typography>
    </div>
  );
}

export default Footer;