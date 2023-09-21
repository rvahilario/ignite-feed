import './global.css'
import './App.modules.css'

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

export function App() {
	return (
		<>
			<Header />
			<body className="wrapper">
				<Sidebar />
			</body>
		</>
	)
}
