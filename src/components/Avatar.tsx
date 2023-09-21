import './Avatar.modules.css'

import defaultAvatar from '../assets/avatar-default.svg'

interface AvatarProps {
	username: string
	title?: string
	avatarImg?: string
	orientation?: 'horizontal' | 'vertical'
}

export function Avatar({ username, title, avatarImg }: AvatarProps) {
	return (
		<div className="avatar">
			<div className="avatar-frame">
				<img src={avatarImg || defaultAvatar} />
			</div>

			<div className="user-info">
				<strong>{username}</strong>
				<span>{title || ''}</span>
			</div>
		</div>
	)
}
