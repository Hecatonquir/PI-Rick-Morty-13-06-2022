import { Route, Switch } from 'react-router-dom';

import LandingPage from './components/01-LandingPage';
import Home from './components/03-Home.jsx';
import Create from './components/04-Create.jsx';
import Error from './components/05-Error.jsx';
import Creados from './components/Creados.jsx';
import Detail from './components/Detail.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<Switch>
			<Route exact path={'/'} component={LandingPage} />
			<Route exact path={'/home'} component={Home} />
			<Route exact path={'/create'} component={Create} />
			<Route exact path={'/creados'} component={Creados} />
			<Route exact path={'/detail/:id'} component={Detail} />
			<Route component={Error} />
		</Switch>
	);
}

export default App;
