import './Sidebar.modules.css'

import { Avatar } from '../Avatar'
import { Button } from '../Button'

const COVER_DEFAULT =
	'https://raw.githubusercontent.com/rvahilario/assets/main/ignite-feed/cover-default.jpg'

interface SidebarProps {
	user: UserType
}

export function Sidebar({ user }: SidebarProps) {
	return (
		<aside className="sidebar">
			<img className="cover-image" src={user.coverImgSrc || COVER_DEFAULT} />
			<Avatar
				username={user.username}
				avatarImg={user.avatarImg}
				title={user.title}
				orientation="vertical"
			/>
			<hr />
			<Button />
		</aside>
	)
}
