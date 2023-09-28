import './PostWidget.modules.css'
import { useState } from 'react'

import { Avatar } from '../Avatar'
import { Button } from '../Button'
import { Feedback } from '../Feedback'
import { formatTimestampToDateTime } from '../../utils'

import { usersMock } from '../../mocks'

interface PostWidgetProps {
	postId: string
	post: PostType
}

export function PostWidget({ postId, post }: PostWidgetProps) {
	const [comment, setComment] = useState('')
	const { user, timestamp, content, feedbacks } = post
	const time = formatTimestampToDateTime(timestamp)
	const feedbacksList = (feedbacks && Object.entries(feedbacks)) || []

	function submitFeedback() {
		console.log('submit comment: ', comment)
	}

	return (
		<article key={postId} className="post-container">
			<header className="post-header">
				<Avatar
					username={usersMock[user].username}
					orientation={'horizontal'}
					title={usersMock[user].title}
					avatarImg={usersMock[user].avatarImg}
				/>
				<time title="" dateTime={time} />
			</header>

			<div className="post-content">
				<p>{content}</p>
			</div>

			<footer className="post-footer">
				<strong>Leave your feedback.</strong>
				<textarea
					placeholder="Write a comment..."
					onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
						setComment(event.target.value)
					}
				/>
				{comment && <Button onClick={submitFeedback}>Publish</Button>}
			</footer>

			{feedbacksList.map(([id, feedback]) => (
				<Feedback key={id} user={usersMock[feedback.user]} />
			))}
		</article>
	)
}
