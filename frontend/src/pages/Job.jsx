import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ApiService } from '../server/api';

const Job = () => {
	const [job, setJob] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const getJobDetail = async () => {
			try {
				const res = await ApiService.fetch(`job-details?job_id=${id}`);
				setJob(res.data.data[0]);
				console.log(res); 
			} catch (error) {
				console.log(error);
			}
		};
		getJobDetail();
	}, [id]);

	if (!job) {
		return (
			<div className='flex justify-center items-center min-h-screen'>
				<h1 className='text-2xl font-semibold'>Loading...</h1>
			</div>
		);
	}

	return (
		<div className='container mx-auto px-4 py-10'>
			<div className='bg-white shadow-lg rounded-lg p-6'>
				<h2 className='text-3xl font-bold mb-4'>{job.job_title}</h2>
				<p className='text-gray-600 text-lg mb-2'>
					<span className='font-semibold'>Company:</span> {job.employer_name}
				</p>
				<p className='text-gray-600 text-lg mb-4'>
					<span className='font-semibold'>Location:</span> {job.job_city}
				</p>

				<div className='mb-6'>
					<h3 className='text-xl font-semibold mb-2'>Job Description</h3>
					<p className='text-gray-700 leading-relaxed'>{job.job_description}</p>
				</div>

				<div className='mb-6'>
					<h3 className='text-xl font-semibold mb-2'>Job Benefits</h3>
					<ul className='list-disc list-inside'>
						{job.job_benefits &&
							job.job_benefits.map((item, idx) => (
								<li key={idx} className='text-gray-700'>
									{item}
								</li>
							))}
					</ul>
				</div>

				<div className='mb-6'>
					<p className='text-gray-600'>
						<span className='font-semibold'>Employment Type:</span>{' '}
						{job.job_employment_type}
					</p>
					<p className='text-gray-600'>
						<span className='font-semibold'>Expiration Date:</span>{' '}
						{new Date(
							job.job_offer_expiration_datetime_utc
						).toLocaleDateString()}
					</p>
				</div>

				<div className='flex justify-between items-center mt-6'>
					<a
						href={job.job_apply_link}
						className='bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700'
					>
						Apply Now
					</a>
					<a
						href={job.job_google_link}
						target='_blank'
						rel='noopener noreferrer'
						className='text-blue-600 underline'
					>
						View on Google Jobs
					</a>
				</div>
			</div>
		</div>
	);
};

export default Job;
