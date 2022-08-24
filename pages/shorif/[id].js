export const getStaticPaths = async () => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
	const data = await res.json()

	const paths = data.map(sho => {
		return {
			params: {
				id: sho.id.toString(),
			},
		}
	})

	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps = async context => {
	const id = context.params.id
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
	const data = await res.json()
	return {
		props: {
			shorif: data,
		},
	}
}

const Details = ({ shorif }) => {
	return (
		<div>
			<h1>{shorif.name}</h1>
			<p>{shorif.email}</p>
			<p>{shorif.website}</p>
			<p>{shorif.address.city}</p>
			<p>{shorif.email}</p>
			<p>{shorif.email}</p>
		</div>
	)
}

export default Details
