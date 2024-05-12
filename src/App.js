import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Components/Login';
import './App.css';
import Mainpage from './Components/Mainpage';

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Login} />
        <Route path="/mainpage" component={Mainpage} />
      </div>
    </Router>
  );
}

export default App;
