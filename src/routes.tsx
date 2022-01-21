import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Products, Cart } from './pages';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Products} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
