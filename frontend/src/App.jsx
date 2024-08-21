import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main';
import Header from './components/Header';
import Job from './pages/Job';
import Search from './pages/Search';
import SearchComponent from './components/Search';

const App = () => {
	return (
		<div>
			<Header />
			<SearchComponent />
			<Routes>
				<Route index element={<Main />} />
				<Route path='/job/:id' element={<Job />} />
				<Route path='/search/:id' element={<Search />} />
			</Routes>
		</div>
	);
};

export default App;
