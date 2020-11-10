import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './components/Home'
import MessageContainer from './containers/MessageContainer';
import FanArtContainer from './containers/FanArtContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/messages" component={MessageContainer} />
          <Route exact path="/fanart" component={FanArtContainer} />
        </div>
      </Router>
    </div>
  );
}

export default App;
