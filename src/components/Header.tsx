import './Header.modules.css'

import igniteLogo from '../assets/ignite-logo.svg'

export function Header() {
	return (
		<header className="header">
			<img className="img" src={igniteLogo} alt="Ingite logo image." />
			<strong>Ignite Feed</strong>
		</header>
	)
}
