import logo from './logo.svg';
import './App.css';
import Login from './project1/loginpage';
import Reg from './project1/registration';
import Home from './project1/home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BasicExample from './project1/card';
import Singleitem from './project1/singleproduct';
import Cart from './project1/cart';
import {Provider} from "react-redux"
import store from './project1/redux/store';

function App() {
  return (
<Provider store={store}>
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact>  <Login /></Route>
        <Route path='/Reg'>< Reg /></Route>
        <Route path='/home'>< Home /></Route>
        <Route path='/items'><BasicExample/></Route>
        <Route path='/singleitem'><Singleitem/></Route>
        <Route path='/Cart'><Cart/></Route>
        </Switch>
      
      </Router>
      
    </div>
    </Provider>
  );
}

export default App;
