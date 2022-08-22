import Link from 'next/link'

const NotFound = () => {
	return (
		<div className='not-found'>
			<h1>Oooooops...!</h1>
			<h2>Page not Found</h2>
			<p>
				Go back to {''}
				<Link href='/'>
					<a className=''>Homepage</a>
				</Link>
			</p>
		</div>
	)
}

export default NotFound
