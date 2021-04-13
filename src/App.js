import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {
  Home,
  Detail,
  Favorites
} from './pages/index';

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar></NavBar>
        <Switch>
          <Route path="/detail/:id">
            <Detail></Detail>
          </Route>
          <Route path="/favorites">
            <Favorites></Favorites>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </div >
    </Router>
  );
}

export default App;
