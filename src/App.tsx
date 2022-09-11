import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './shared/Header/Header';

function App() {
	return (
		<>
			<Header />
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Navigate to='/weather-challenge' />} />
					<Route path='/weather-challenge' element={<Home />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
