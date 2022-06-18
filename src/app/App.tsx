import logo from '../assets/logo.svg';
import './App.scss';
import Main from './pages/main/Main';
import Header from './shared/components/header/Header';
import Footer from './shared/components/footer/Footer';

function App() {
	return (
		<div className="App">
			<Header></Header>
			<Main></Main>
			<Footer></Footer>
		</div>
	);
}

export default App;
