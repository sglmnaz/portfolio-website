import logo from '../assets/logo.svg';
import './App.scss';
import Main from './pages/main/Main';
import Header from './shared/components/header/Header';

function App() {
	return (
		<div className="App">
			<Header></Header>
			<Main></Main>
		</div>
	);
}

export default App;
