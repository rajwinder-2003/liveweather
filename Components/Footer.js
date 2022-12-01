import { useRouter } from 'next/router'
import React from 'react'

const Footer = () => {
	const router = useRouter();
	const {slug} = router.query;

	if (!slug) {
		return (
			<>
				<div className=' sticky bottom-0 bg-black/30 mt-10'>
				<div className='flex justify-end mx-2 lg:mx-20'>
					<h1 className='lg:text-2xl text-white py-1'>Powerd by <span className='text-red-700 text-lg lg:text-3xl'>Rajwinder</span></h1>
				</div>
			</div>
			</>
		)
	} else {
		return (
			<div className='relative bg-black'>
				<div className='flex justify-end mx-2 lg:mx-20'>
					<h1 className='lg:text-2xl text-white py-1'>Powerd by <span className='text-red-700 text-lg lg:text-3xl'>Rajwinder</span></h1>
				</div>
			</div>
		  )
	}

  
}

export default Footer