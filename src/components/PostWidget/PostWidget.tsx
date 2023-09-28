import './PostWidget.modules.css'
import { useState } from 'react'

import { Avatar } from '../Avatar'
import { Button } from '../Button'
import { Feedback } from '../Feedback'
import { formatTimestampToDateTime } from '../../utils'

import { LOGGED_USER, usersMock } from '../../mocks'
import moment from 'moment'

interface PostWidgetProps {
	postId: string
	post: PostType
}

export function PostWidget({ postId, post }: PostWidgetProps) {
	const [comment, setComment] = useState('')
	const time = formatTimestampToDateTime(post.timestamp)
	const feedbacksList = (post.feedbacks && Object.entries(post.feedbacks)) || []

	function submitFeedback() {
		console.log('submit comment: ', comment)
	}

	return (
		<article key={postId} className="post-container">
			<header className="post-header">
				<Avatar
					username={usersMock[post.user].username}
					orientation={'horizontal'}
					title={usersMock[post.user].title}
					avatarImg={usersMock[post.user].avatarImg}
				/>
				<time
					title={formatTimestampToDateTime(post.timestamp, 'MMM Do YY')}
					dateTime={time}
				>
					{`Published ${moment(time).fromNow()}`}
				</time>
			</header>

			<div className="post-content">
				<p>{post.content}</p>
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
				<Feedback
					key={id}
					feedback={feedback}
					user={usersMock[feedback.user]}
					readOnly={LOGGED_USER !== feedback.user && LOGGED_USER !== post.user}
				/>
			))}
		</article>
	)
}
