import { Route, Switch } from 'react-router-dom';

import LandingPage from './components/01-LandingPage';
import Home from './components/03-Home.jsx';
import Create from './components/04-Create.jsx';
import Error from './components/05-Error.jsx';
import Creados from './components/Creados.jsx';

function App() {
	return (
		<main>
			
			<Switch>
				<Route exact path={'/'} component={LandingPage} />
				<Route exact path={'/home'} component={Home} />
				<Route exact path={'/create'} component={Create} />
				<Route exact path={'/creados'} component={Creados} />
				<Route component={Error} />
			</Switch>
		</main>
	);
}

export default App;
