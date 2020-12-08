import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { Container} from "./components/Grid";

import Search from './pages/Search';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
        <Router>
          <Container>
            <Switch>
            <Route exact path="/" component={Search} />
        
            </Switch>
          </Container>
        </Router>
    //   </header>
    // </div>
  );
}

export default App;
