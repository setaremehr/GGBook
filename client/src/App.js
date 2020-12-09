import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { Container} from "./components/Grid";
import Nav from "./components/Nav";
import Search from './pages/Search';
import Saved from "./pages/Saved";
import { ToastContainer, Zoom } from 'react-toastify';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Nav/>
        <Router>
          <Container>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            transition={Zoom}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnVisibilityChange
            draggable={false}
            pauseOnHover
          />
          <Switch>
              <Route exact path="/" component={Search} />
              <Route path="/bookshelf" component={Saved} />
              <Route exact path="/books/:id" component={null} />
              <Route component={null} />
            </Switch>
          </Container>
        </Router>
       </header>
   </div> 
  );
}

export default App;
