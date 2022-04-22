import Create from './components/Create';
import Update from './components/Update';
import Read from './components/Read';
import Delete from './components/Delete';

import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Create />
      </div>
      <div>
        <Read />
      </div>
      <div>
        <Update />
      </div>
      <div>
        <Delete />
      </div>
    </div>
  );
}

export default App;
