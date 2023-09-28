import './global.css'
import './App.modules.css'

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { PostsFeed } from './components/PostsFeed/PostsFeed'

import { usersMock } from './mocks' //TODO: remove mocks

export function App() {
	return (
		<>
			<Header />
			<div className="wrapper">
				<Sidebar user={usersMock['leslieAlexander']} />
				<PostsFeed />
			</div>
		</>
	)
}
