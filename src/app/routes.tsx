import { Route, Routes } from 'react-router-dom';
import Main from './pages/main/Main';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';

export const routes = () => {
	return (
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="/about" element={<About />} />
			<Route path="/projects" element={<Projects />} />
		</Routes>
	);
};
