import { createUseStyles } from 'react-jss';
import { NavLink } from 'react-router-dom';

const useStyles = createUseStyles({
  navigation: {
    display: 'flex',
    justifyContent: 'space-around',

    '& .active': {
      backgroundColor: 'blue',
      color: 'white',
    },
  },
});

const Navigation = () => {
  const classes = useStyles();

  return (
    <div className={classes.navigation}>
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/weather">Weather</NavLink>
      <NavLink to="/retro">Retrospective</NavLink>
      <NavLink to="/todos">Todos</NavLink>
    </div>
  );
};

export default Navigation;
