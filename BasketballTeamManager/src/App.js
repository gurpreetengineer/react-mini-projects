import { Provider } from 'react-redux';
import Store from './store';
import {BrowserRouter as Router} from 'react-router-dom';
import MainComponent from './components/Index'
import Routes from './routes'

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <Router>
          <MainComponent />
          <Routes />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
