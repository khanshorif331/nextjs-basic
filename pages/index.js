import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<>
			<Head>
				<title>Shorif List | Home</title>
				<meta name="keywords" content="shorif" />
			</Head>
			<div>
				<h1 className={styles.title}>Home Page</h1>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
					maxime, quia cumque veniam consequatur quod nam minus itaque
					suscipit iste. Lorem ipsum dolor sit amet, consectetur
					adipisicing elit. Aut maxime, quia cumque veniam consequatur quod
					nam minus itaque suscipit iste.Lorem ipsum dolor sit amet,
					consectetur adipisicing elit. Aut maxime, quia cumque veniam
					consequatur quod nam minus itaque suscipit iste. Lorem ipsum
					dolor sit amet, consectetur adipisicing elit. Aut maxime, quia
					cumque veniam consequatur quod nam minus itaque suscipit iste.
				</p>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
					maxime, quia cumque veniam consequatur quod nam minus itaque
					suscipit iste. Lorem ipsum dolor sit amet, consectetur
					adipisicing elit. Aut maxime, quia cumque veniam consequatur quod
					nam minus itaque suscipit iste.Lorem ipsum dolor sit amet,
					consectetur adipisicing elit. Aut maxime, quia cumque veniam
					consequatur quod nam minus itaque suscipit iste. Lorem ipsum
					dolor sit amet, consectetur adipisicing elit. Aut maxime, quia
					cumque veniam consequatur quod nam minus itaque suscipit iste.
				</p>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
					maxime, quia cumque veniam consequatur quod nam minus itaque
					suscipit iste. Lorem ipsum dolor sit amet, consectetur
					adipisicing elit. Aut maxime, quia cumque veniam consequatur quod
					nam minus itaque suscipit iste.Lorem ipsum dolor sit amet,
					consectetur adipisicing elit. Aut maxime, quia cumque veniam
					consequatur quod nam minus itaque suscipit iste. Lorem ipsum
					dolor sit amet, consectetur adipisicing elit. Aut maxime, quia
					cumque veniam consequatur quod nam minus itaque suscipit iste.
				</p>
				<Link href="/shorif">
					<a className={styles.btn}>See Shorif Listing</a>
				</Link>
			</div>
		</>
	)
}
