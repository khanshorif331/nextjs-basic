import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Shorif.module.css'

// this function provided by nextjs to call the api
export const getStaticProps = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users')
	const data = await res.json()
	return {
		props: {
			shorif: data,
		},
	}
}

const Shorif = ({ shorif }) => {
	return (
		<>
			<Head>
				<title>Shorif List | Shorif</title>
				<meta name="keywords" content="shorif" />
			</Head>
			<div>
				<h1>This is Shorif World</h1>
				{shorif?.map(sho => {
					return (
						<Link href={`/shorif/${sho.id}`} key={sho.id}>
							<a className={styles.single}>
								<h3>{sho.name}hello</h3>
							</a>
						</Link>
					)
				})}
			</div>
		</>
	)
}

export default Shorif
