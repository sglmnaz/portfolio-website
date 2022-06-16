import logo from '../assets/logo.svg';
import './App.scss';
import Header from './shared/components/header/Header';

function App() {
	return (
		<div className="App">
			<Header></Header>
			<div style={{ backgroundColor: '#505080', height: '850px' }}></div>
			<div style={{ backgroundColor: '#FFFFFF', height: '850px' }}></div>
		</div>
	);
}

export default App;
