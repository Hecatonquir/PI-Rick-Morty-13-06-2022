import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store.js';
import './components/styles/index.css';

/* ------------ Configurations for Deploy ----------- */
import axios from 'axios';
/*import dotenv from 'dotenv';
dotenv.config(); */
axios.defaults.baseURL = process.env.REACT_APP_API || 'http://localhost:3001';
/* ------------ End of Deploy config ---------------- */

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
