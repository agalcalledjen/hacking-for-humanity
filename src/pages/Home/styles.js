const styles = theme => ({
  container: {
    flexGrow: 1,
    height: '100%'
  },
  item: {
    padding: theme.spacing.unit * 5,
    width: '100%',
    maxWidth: 500,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing.unit * 20
    }
  },
  headline: {
    weight: 700
  },
  ocean: {},
  wave1: {},
  wave2: {}
});

export default styles;
