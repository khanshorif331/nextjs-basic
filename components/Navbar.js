import Link from 'next/link'

const Navbar = () => {
	return (
		<nav>
			<div className="logo">
				<img src="/logo.png" />
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
