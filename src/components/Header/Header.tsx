import styles from './Header.module.css'

import igniteLogo from '../../assets/ignite-logo.svg'

export function Header() {
	return (
		<header className={styles.header}>
			<img className={styles.img} src={igniteLogo} alt="Ingite logo image." />
			<strong>Ignite Feed</strong>
		</header>
	)
}
