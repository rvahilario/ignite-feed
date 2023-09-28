import './Feedback.modules.css'
import moment from 'moment'
import { formatTimestampToDateTime } from '../../utils'

import { Avatar } from '../Avatar'
import { Button } from '../Button'
import { Trash } from '@phosphor-icons/react'

interface FeedbackProps {
	feedback: FeedbackType
	user: UserType
}

export function Feedback({ feedback, user }: FeedbackProps) {
	const time = formatTimestampToDateTime(feedback.timestamp)

	return (
		<div className="feedback">
			<Avatar
				username={user.username}
				orientation={'only-avatar'}
				avatarImg={user.avatarImg}
			/>

			<div className="fb-wrapper">
				<div className="fb-container">
					<header className="fb-header">
						<div>
							<strong>
								{user.username}
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

					</header>

					<div className="fb-content">{feedback.content}</div>
					</div>

				<div className="fb-like">
					<Button
						variant="like"
						likes={feedback.likes.length}
						onClick={() => console.log('like')}
					/>
				</div>
			</div>
		</div>
	)
}
