import './global.css'
import './App.modules.css'

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import { users } from './mocks'

export function App() {
	return (
		<>
			<Header />
			<div className="wrapper">
				<Sidebar user={users['leslieAlexander']} />
			</div>
		</>
	)
}
