import './App.css';
import "react-multi-carousel/lib/styles.css";
import { NavBar } from './Containers/NavBar/NavBar';
import { Home } from './Containers/Home/Home';

function App() {
	return (
		<>
			<NavBar />
			<Home />
		</>
	);
};

export default App
