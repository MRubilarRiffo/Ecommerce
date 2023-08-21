import './App.css';
import "react-multi-carousel/lib/styles.css";
import { NavBar } from './Containers/NavBar/NavBar';
import { Home } from './Containers/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { All_Products } from './Components/All Products/All Products';
import { Details } from './Containers/Details/Details';

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/productos' element={<All_Products />} />
				<Route path='/productos/:slug/:sku' element={<Details />} />
			</Routes>
		</>
	);
};

export default App
