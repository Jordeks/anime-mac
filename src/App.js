import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './components/Home'
import MessageContainer from './containers/MessageContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/messages" component={MessageContainer} />
        </div>
      </Router>
    </div>
  );
}

export default App;
