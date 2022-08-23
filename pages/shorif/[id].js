export const getStaticPaths = async () => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
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

const Details = () => {
	return (
		<div>
			<h1>Details Page</h1>
		</div>
	)
}

export default Details
