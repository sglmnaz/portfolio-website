import './App.scss';
import Header from './shared/components/header/Header';
import Footer from './shared/components/footer/Footer';
import { routes } from './routes';

function App() {
	return (
		<div className="App">
			<Header></Header>
			{routes()}
			<Footer></Footer>
		</div>
	);
}

export default App;
