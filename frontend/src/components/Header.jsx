import React from 'react';

const Header = () => {
	return (
		<header className='bg-white shadow'>
			<div className='container mx-auto px-4 py-6 flex justify-between items-center'>
				<h1 className='text-2xl font-bold text-blue-600'>JobFinder</h1>
				<nav></nav>
			</div>
		</header>
	);
};

export default Header;
