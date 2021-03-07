import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Retro from '../pages/Retro';
import Todos from '../pages/Todos';
import Weather from '../pages/Weather';
import Page404 from '../pages/Page404';

const Content = () => {
  return (
    <div className="content">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/retro" component={Retro} />
        <Route path="/todos" component={Todos} />
        <Route path="/weather" component={Weather} />
        <Route component={Page404} />
      </Switch>
    </div>
  );
};

export default Content;
