import styles from './Sidebar.module.css'

import { Avatar } from '../Avatar'
import { Button } from '../Button'
import { PencilSimpleLine } from '@phosphor-icons/react'

const COVER_DEFAULT =
	'https://raw.githubusercontent.com/rvahilario/assets/main/ignite-feed/cover-default.jpg'

interface SidebarProps {
	user: UserType
}

export function Sidebar({ user }: SidebarProps) {
	function handleEditProfile() {
		console.log('click edit profile')
	}

	return (
		<aside className={styles.sidebar}>
			<img
				className={styles.coverImage}
				src={user.coverImgSrc || COVER_DEFAULT}
			/>
			<Avatar
				username={user.username}
				avatarImg={user.avatarImg}
				title={user.title}
				orientation="vertical"
			/>
			<div className={styles.containerButton}>
				<Button variant={'outline'} onClick={handleEditProfile}>
					<PencilSimpleLine
						size={'1.25rem'}
						weight="bold"
						className={styles.icon}
					/>
					Edit your profile
				</Button>
			</div>
		</aside>
	)
}
