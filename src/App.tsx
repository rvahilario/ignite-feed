import './global.css'
import './App.modules.css'

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { PostWidget } from './components/PostWidget'

import { users } from './mocks' //TODO: remove mocks

export function App() {
	return (
		<>
			<Header />
			<div className="wrapper">
				<Sidebar user={users['leslieAlexander']} />
				<PostWidget user={users['leslieAlexander']} />
			</div>
		</>
	)
}
