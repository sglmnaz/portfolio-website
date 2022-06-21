import { Route, Routes } from 'react-router-dom';
import Main from './pages/main/Main';
import About from './pages/about/About';

export const routes = () => {
	return (
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="/about" element={<About />} />
		</Routes>
	);
};
