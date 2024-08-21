import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchComponent = () => {
	const [search, setSearch] = useState('');
	const navigate = useNavigate();
	const onSearchJob = (e) => {
		e.preventDefault();
		setSearch('');
		navigate(`/search/${search}`);
	};
	return (
		<div className='bg-slate-100'>
			<section className=' py-16 max-w-2xl mx-auto'>
				<div className='container mx-auto  px-4 text-center'>
					<form className='flex' onSubmit={onSearchJob}>
						<input
							type='text'
							placeholder='Job title, keywords, or company'
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							className='w-full p-4 rounded-l-md focus:outline-none'
						/>
						<button
							type='submit'
							className='bg-white text-blue-600 px-8 py-4 rounded-r-md font-semibold'
						>
							Search
						</button>
					</form>
				</div>
			</section>
		</div>
	);
};

export default SearchComponent;
