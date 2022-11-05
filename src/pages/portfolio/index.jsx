import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography,
  } from '@material-ui/core';
  import React from 'react';
  import { useStyles } from './styles/portfolio';
  
  const projects = [
    {
      image: '/images/QRCoverP1.png',
      name: 'Todo App',
      description: `This project is a simple QR Code Generator that uses a container that flips with your Qr Code Results. You can make any text or URL a QR code, you can edit the color of the QR code and the background color of the QR Code. It has the options to change the size of the image, margins of the image and save in png, gif, jpeg, jpg, and svg file formats.`,
      tools: ['CSS', 'JavaScript', 'HTML:5'],
      live: 'https://libhartll.github.io/QR-code-generator/',
      source: 'https://github.com/LibhartLL/QR-code-generator',
    },
    {
      image: '/images/yes-noP2.jpg',
      name: 'Yes or No Magic 8 Ball App',
      description: `This project uses the https://yesno.wtf/api to help give you a Yes or No answer when you type a question in the application.`,
      tools: ['CSS', 'JavaScript', 'HTML:5'],
      live: 'https://libhartll.github.io/YesOrNo8Ball/',
      source: 'https://github.com/LibhartLL/YesOrNo8Ball',
    },
    {
      image: '/images/ReadmeGenP3.jpg',
      name: 'README.md Generator',
      description: `This is a app that you run from your terminal. You will use NodeJS and NPM. It generates a README.md file for your application.`,
      tools: ['javascript'],
      live: 'https://libhartll.github.io/ReadmeGenerator/',
      source: 'https://github.com/LibhartLL/ReadmeGenerator',
    },
  ];
  
  const Portfolio = () => {
    const classes = useStyles();
    return (
      <Box component="div" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          Projects
        </Typography>
        <Grid container justify="center">
          {/* Projects */}
          {projects.map((project, i) => (
            <Grid item xs={12} sm={8} md={4} key={i}>
              <Card className={classes.cardContainer}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Project 1"
                    height="140"
                    image={project.image}
                  />
                  <CardContent>
                    <Typography
                      variant="h5"
                      gutterBottom
                      className={classes.projectName}
                    >
                      {project.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      className={classes.projectDescription}
                    >
                      {project.description}
                    </Typography>
  
                    {/* Tools */}
                    {project.tools.map((tool, i) => (
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        style={{
                          marginRight: '5px',
                          height: '18px',
                          background: '#F7A579',
                        }}
                        key={i}
                      >
                        {tool}
                      </Button>
                    ))}
                    {/* end */}
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.button}>
                  <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    target="blank"
                    href={project.live}
                  >
                    Live Demo
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    color="secondary"
                    style={{ background: '#589084' }}
                    target="blank"
                    href={project.source}
                  >
                    Source Code
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
          {/* end */}
        </Grid>
      </Box>
    );
  };
  
  export default Portfolio;