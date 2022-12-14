import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
	return (
		<nav>
			<div className="logo">
				<Image src="/logo.png" width={60} height={47} alt="logo" />
			</div>
			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="/about">
				<a>About</a>
			</Link>
			<Link href="/shorif">
				<a>Shorif Listing</a>
			</Link>
		</nav>
	)
}

export default Navbar
