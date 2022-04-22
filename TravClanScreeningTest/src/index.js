import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reducer, { initialState } from './context/reducer';
import { ContextProvider } from './context/contextAPI';

ReactDOM.render(
	<React.StrictMode>
		<ContextProvider initialState={initialState} reducer={reducer}>
			<Router>
				<App />
			</Router>
		</ContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
