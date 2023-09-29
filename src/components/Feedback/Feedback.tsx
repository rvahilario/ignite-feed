import styles from './Feedback.module.css'
import moment from 'moment'
import { formatTimestampToDateTime } from '../../utils'

import { Avatar } from '../Avatar'
import { Button } from '../Button'
import { Trash } from '@phosphor-icons/react'

import { LOGGED_USER } from '../../mocks'

interface FeedbackProps {
	feedback: FeedbackType
	user: UserType
	readOnly: boolean
}

export function Feedback({ feedback, user, readOnly }: FeedbackProps) {
	const time = formatTimestampToDateTime(feedback.timestamp)

	return (
		<div className={styles.feedback}>
			<Avatar
				username={user.username}
				orientation={'only-avatar'}
				avatarImg={user.avatarImg}
			/>

			<div className={styles.fbWrapper}>
				<div className={styles.fbContainer}>
					<header className={styles.fbHeader}>
						<div>
							<strong>
								{user.username}
								{LOGGED_USER === feedback.user && <span>{' (you)'}</span>}
							</strong>
							<time
								title={formatTimestampToDateTime(
									feedback.timestamp,
									'MMM Do YY'
								)}
								dateTime={time}
							>
								{moment(time).fromNow()}
							</time>
						</div>

						{!readOnly && (
							<Trash
								size={'1.5rem'}
								color={'var(--gray-300)'}
								weight="regular"
							/>
						)}
					</header>

					<p className={styles.fbContent}>{feedback.content}</p>
				</div>

				<footer className={styles.fbLike}>
					<Button
						variant="like"
						likes={feedback.likes.length}
						pressed={feedback.likes.includes(LOGGED_USER)}
						onClick={() => console.log('like')}
					/>
				</footer>
			</div>
		</div>
	)
}
