import { Fragment } from 'react';
import './App.css';
import VenturePactlogo from './assets/venturePact.png';
import CustomRoutes from './routes';

function App() {
  return (
    <Fragment>
      <div className='App_container'>
        <div className='App_header_container'>
          <div className='App_header' >
            <img src={VenturePactlogo} alt='Venture Pact Logo' />
            <div className='App_header_title'>Assignment</div>
          </div>
        </div>
        <CustomRoutes />
      </div>
    </Fragment>
  );
}

export default App;
