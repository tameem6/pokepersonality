import Questions from './Components/questions'
import StartPage from './Components/startPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={StartPage} />
        <Route path='/test' component={Questions} />
      </Switch>
    </Router>

  );
}

export default App;
