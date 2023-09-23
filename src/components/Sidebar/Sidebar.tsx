import './Sidebar.modules.css'

import { Avatar } from '../Avatar'
import { Button } from '../Button'
import userAvatar from '../../assets/user-image.svg'

const user = {
	username: 'Leslie Alexander',
	title: 'UI Designer',
	avatarImg: userAvatar,
	cover: '',
}

export function Sidebar() {
	return (
		<aside className="sidebar">
			<img className="cover-image" src="" />
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
