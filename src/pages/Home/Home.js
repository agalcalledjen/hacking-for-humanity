import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  withStyles,
  Typography,
  Grid,
  Zoom,
  Card,
  CardContent,
  CardActions,
  TextField
} from '@material-ui/core';
import { useTransition, animated, config } from 'react-spring';

import styles from './styles';
import './styles.css';

const slides = [
  { id: 0, url: '/aluminum.png' },
  { id: 1, url: '/compostable.png' },
  { id: 2, url: '/glass.png' },
  { id: 3, url: '/paper.png' },
  { id: 4, url: '/styrofoam.png' }
];

const Recyclables = () => {
  const [index, set] = useState(0);
  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses
  });
  useEffect(
    () => void setInterval(() => set(state => (state + 1) % 4), 1000),
    []
  );
  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      class="bg"
      style={{
        ...props,
        backgroundImage: `url(${item.url}`
      }}
    />
  ));
};

const Home = ({ classes }) => {
  if (localStorage.getItem('unlockedItems') === null) {
    localStorage.setItem('unlockedItems', ['Aluminum']);
  }

  const [reState] = useState(true);

  return (
    <Grid
      container
      className={classes.container}
      direction="row"
      alignItems="center"
      justify="center"
    >
      <Grid item xs={12} sm={12} md={6} className={classes.item}>
        <Zoom in={reState}>
          <Typography variant="h4" className={classes.header} gutterBottom>
            Life of Litter
          </Typography>
        </Zoom>
        <Zoom in={reState}>
          <Typography variant="h1" className={classes.headline}>
            Reduce.
          </Typography>
        </Zoom>
        <Zoom
          in={reState}
          style={{ transitionDelay: reState ? '500ms' : '0ms' }}
        >
          <Typography variant="h1" className={classes.headline}>
            Reuse.
          </Typography>
        </Zoom>
        <Zoom
          in={reState}
          style={{ transitionDelay: reState ? '1000ms' : '0ms' }}
        >
          <Typography variant="h1" className={classes.headline}>
            Recycle.
          </Typography>
        </Zoom>
      </Grid>
      <Grid item xs={12} sm={12} md={6} className={classes.item}>
        <div style={{ margin: '10px' }}>
          <Recyclables />
        </div>
        <Card
          className={classes.card}
          style={{ borderRadius: 0, marginTop: 275, zIndex: 999 }}
        >
          <CardContent style={{ zIndex: 999, paddingTop: 5 }}>
            <TextField
              type="text"
              fullWidth
              name="username"
              className={classes.textField}
              placeholder="Username"
              required
            />
            <TextField
              type="password"
              fullWidth
              name="password"
              className={classes.textField}
              placeholder="Password"
              required
            />
          </CardContent>
          <CardActions className={classes.btnContainer}>
            <Button
              variant="outlined"
              aria-label="Select your trash"
              component={Link}
              to="/choose-litter"
              color="secondary"
            >
              Start
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <div className={'ocean'}>
        <div className={'wave'} />
        <div className={'wave'} />
      </div>
    </Grid>
  );
};

export default withStyles(styles)(Home);
