import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { Container} from "./components/Grid";

import Search from './pages/Search';
import Saved from "./pages/Saved";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Container>
            <Switch>
            <Route exact path="/" component={Search} />
            <Route path="/bookshelf" component={Saved} />
            </Switch>
          </Container>
        </Router>
       </header>
   </div> 
  );
}

export default App;
