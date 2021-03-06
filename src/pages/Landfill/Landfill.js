import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import litterData from '../../data/litter.json';
import styles from './styles';
import AlLandfill from '../../components/AlLandfill';
import landfillImg from '../../images/skynews-food-waste.jpg';

const unlockNewItem = () => {
  const unlockedItems = localStorage.getItem('unlockedItems').split(',');
  const newItemName = Object.keys(litterData.litter)[unlockedItems.length];
  localStorage.setItem('unlockedItems', [...unlockedItems, newItemName]);
};

const Landfill = ({ classes, location }) => {
  if (localStorage.getItem('unlockedItems') === null) {
    localStorage.setItem('unlockedItems', ['Aluminum']);
  }
  const litter = location.state && location.state.litter;
  const name = location.state && location.state.name;
  const isCorrectMethod = litter && litter.correctMethod === 'landfill';
  if (isCorrectMethod) {
    // ensure we haven't visited this item yet
    let visitedItems = localStorage.getItem('visitedItems');
    if (!visitedItems) {
      console.log('nothing visited');
      unlockNewItem();
      localStorage.setItem('visitedItems', [name]);
    } else {
      visitedItems = visitedItems.split(',');
      console.log(visitedItems, name);
      if (!visitedItems.includes(name)) {
        console.log('unlocking!', visitedItems, name);
        unlockNewItem();
        localStorage.setItem('visitedItems', [...visitedItems, name]);
      }
    }
  }

  return (
    <div className={classes.landfill}>
      <Typography variant="h2" gutterBottom className={classes.title}>
        Landfill
      </Typography>
      {name === 'Aluminum' && litter && name ? (
        <AlLandfill litter={litter} name={name} />
      ) : null}
    </div>
  );
};

export default withStyles(styles)(Landfill);
