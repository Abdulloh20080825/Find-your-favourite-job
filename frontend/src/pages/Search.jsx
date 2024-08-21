import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ApiService } from '../server/api';

const Search = () => {
	const [data, setData] = useState(null);
	const { id } = useParams();
	useEffect(() => {
		const getData = async () => {
			const data = await ApiService.fetch(`search?query=${id}`);
			setData(data.data.data);
			console.log(data);
		};
		getData();
	}, [id]);

	if (!data) {
		return (
			<div>
				<h1>Loading...</h1>
			</div>
		);
	}
	return (
		<div className='min-h-screen bg-gray-100'>
			<section className='py-20'>
				<div className='container mx-auto px-4'>
					<h3 className='text-3xl font-bold text-gray-800 mb-10'>
						Featured Jobs
					</h3>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{data.map((item, idx) => (
							<div className='bg-white p-6 shadow rounded-lg' key={idx}>
								<h4 className='text-xl font-semibold text-gray-800'>
									{item.job_title.length > 40
										? `${item.job_title.slice(0, 40)}...`
										: item.job_title}
								</h4>
								<p className='text-gray-600'>
									{item.job_city} {item.job_country}
								</p>
								<Link
									to={`/job/${item.job_id}`}
									className='text-blue-600 mt-4 inline-block'
								>
									View Job
								</Link>
							</div>
						))}
					</div>
				</div>
			</section>
			<section className='bg-gray-200 py-20'>
				<div className='container mx-auto px-4'>
					<h3 className='text-3xl font-bold text-gray-800 mb-10'>
						Explore by Categories
					</h3>
					<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
						<div className='bg-white p-6 shadow rounded-lg'>
							<h4 className='text-xl font-semibold text-gray-800'>
								Engineering
							</h4>
							<p className='text-gray-600'>Browse 1234 jobs</p>
						</div>
					</div>
				</div>
			</section>
			<footer className='bg-gray-800 py-10'>
				<div className='container mx-auto px-4 text-center text-white'>
					<p>&copy; 2024 JobFinder. All rights reserved.</p>
				</div>
			</footer>
		</div>
	);
};

export default Search;
