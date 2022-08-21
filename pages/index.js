import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div>
			<Navbar></Navbar>
			<h1>This is homepage</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
				maxime, quia cumque veniam consequatur quod nam minus itaque
				suscipit iste.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
				maxime, quia cumque veniam consequatur quod nam minus itaque
				suscipit iste.
			</p>
		</div>
	)
}
