import './App.css';
import Home from './components/Home'
import Typography from '@material-ui/core/Typography';
import deepOrange from '@material-ui/core/colors/deepOrange';

const color = deepOrange[500];


function App() {
  return (
    <div className="App">
      <Typography color="textSuccess" align="center"><h1>testing color</h1></Typography>
      <Home />
    </div>
  );
}

export default App;
