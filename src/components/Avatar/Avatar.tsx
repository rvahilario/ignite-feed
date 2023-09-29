import styles from './Avatar.module.css'

import defaultAvatar from '../../assets/avatar-default.svg'

interface AvatarProps {
	username: string
	title?: string
	avatarImg?: string
	orientation?: 'horizontal' | 'vertical' | 'only-avatar'
}

export function Avatar({
	username,
	title,
	avatarImg,
	orientation = 'horizontal',
}: AvatarProps) {
	return (
		<div className={`${styles.avatar} ${styles[orientation]}`}>
			<div className={`${styles.avatarFrame} ${styles[orientation]}`}>
				<img src={avatarImg || defaultAvatar} />
			</div>

			<div className={`${styles.userInfo} ${styles[orientation]}`}>
				<strong>{username}</strong>
				{title && <span>{title}</span>}
			</div>
		</div>
	)
}
