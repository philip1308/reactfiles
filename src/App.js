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


function App() {
  return (

    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact>  <Login /></Route>
        <Route path='/Reg'>< Reg /></Route>
        <Route path='/Home'>< Home /></Route>
        
        </Switch>
      
      </Router>
      
    </div>
  );
}

export default App;
