const styles = theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    textAlign: 'center',
    color: theme.palette.primary.dark
  },
  factContainer: {
    color: 'white',
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    background:
      'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url(https://image.shutterstock.com/image-vector/vector-illustration-landfill-landscape-waste-260nw-1188827215.jpg) no-repeat',
    backgroundSize: 'cover'
  },
  correctFactContainer: {
    color: 'white',
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)) no-repeat',
    backgroundSize: 'cover'
  },
  fact: {
    width: '50%',
    margin: '20px auto'
  },
  img: {
    width: '10%'
  }
});

export default styles;
