import styles from './Feedback.module.css'
import moment from 'moment'
import { formatTimestampToDateTime } from '../../utils'

import { Avatar } from '../Avatar'
import { Button } from '../Button'
import { Trash } from '@phosphor-icons/react'

import { LOGGED_USER } from '../../mocks'

interface FeedbackProps {
	feedback: FeedbackType
	feedbackId: string
	user: UserType
	readOnly: boolean
	onDeleteFeedback: (feedbackId: string, readOnly: boolean) => void
	onUpdateFeedback: (feedbackId: string, feedBack: FeedbackType) => void
}

export function Feedback({
	feedback,
	feedbackId,
	user,
	readOnly,
	onDeleteFeedback,
	onUpdateFeedback,
}: FeedbackProps) {
	const time = formatTimestampToDateTime(feedback.timestamp)
	const { likes } = feedback

	const handleLikeFeedback = () => {
		const newFeedback: FeedbackType = {
			...feedback,
			likes: likes.includes(LOGGED_USER)
				? likes.filter((like) => like !== LOGGED_USER)
				: [...likes, LOGGED_USER],
		}

		onUpdateFeedback(feedbackId, newFeedback)
	}

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
							<button
								className={styles.trashButton}
								onClick={() => onDeleteFeedback(feedbackId, readOnly)}
							>
								<Trash size={'1.5rem'} weight="regular" />
							</button>
						)}
					</header>

					<p className={styles.fbContent}>{feedback.content}</p>
				</div>

				<footer className={styles.fbLike}>
					<Button
						variant="like"
						likes={feedback.likes.length}
						pressed={feedback.likes.includes(LOGGED_USER)}
						onClick={handleLikeFeedback}
					/>
				</footer>
			</div>
		</div>
	)
}
