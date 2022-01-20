import './App.css';
import { Link, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import OneInput from './components/OneInput';
import Multi from './components/Multi';


function App() {
  return (
    <div className="App">
      <h2>Routing Practice 🐱‍👤</h2>
      <p>
        <Link to="/">Home</Link>
      </p>

      <Switch>

        <Route path = "/:input/:textColor/:backgroundColor">
          <Multi />
        </Route>

        <Route path="/:input">
          <OneInput />
        </Route>

        <Route path="/">
          <Home />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
