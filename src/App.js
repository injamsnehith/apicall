import "./App.css";
import {BrowserRouter as Router, HashRouter, Switch , Route} from "react-router-dom";
import day6 from "./component/day6"
import table from "./component/table"

function App(){
    return (
      <Router>
      <HashRouter>
        <Switch>
          
          <Route path="/" exact component={table}/>
          {/* <Route component={Error} /> */}
          </Switch>
      </HashRouter>
    </Router>
    );
  }


export default App;