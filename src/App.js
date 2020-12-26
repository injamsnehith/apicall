import "./App.css";
import {BrowserRouter as Router, HashRouter, Switch , Route} from "react-router-dom";
import day6 from "./component/day6"

function App(){
    return (
      <Router>
      <HashRouter>
        <Switch>
          
          <Route path="/" exact component={day6}/>
          {/* <Route component={Error} /> */}
          </Switch>
      </HashRouter>
    </Router>
    );
  }


export default App;