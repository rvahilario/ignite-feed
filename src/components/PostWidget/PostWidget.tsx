import styles from './PostWidget.module.css'
import { useEffect, useState } from 'react'

import { Avatar } from '../Avatar'
import { Button } from '../Button'
import { Feedback } from '../Feedback'
import { formatTimestampToDateTime } from '../../utils'

import { LOGGED_USER, usersMock } from '../../mocks'
import moment from 'moment'

const MS_TO_SECONDS = 1000

interface PostWidgetProps {
	postId: string
	post: PostType
}

export function PostWidget({ postId, post }: PostWidgetProps) {
	const [comment, setComment] = useState('')
	const time = formatTimestampToDateTime(post.timestamp)
	const [feedbacks, setFeedbacks] = useState(post.feedbacks || {})
	const [feedbacksList, setFeedbacksList] = useState(
		Object.entries(feedbacks) || []
	)

	// just to simulate a real feedback submission without a backend
	function handleSubmitFeedback() {
		const newFeedback: FeedbackType = {
			user: LOGGED_USER,
			content: comment,
			timestamp: Date.now() / MS_TO_SECONDS, // timestamp in seconds fix browser compatibility
			likes: [],
		}
		console.log('newFeedback', newFeedback)

		setFeedbacks((prevState) => ({
			...prevState,
			[`${LOGGED_USER}-${Date.now().toString()}`]: newFeedback,
		}))
		setComment('')
	}

	// simulate removing a feedback without a backend
	const handleDeleteFeedback = (feedbackId: string, readOnly: boolean) => {
		if (!readOnly) {
			setFeedbacks((prevState) => {
				const newState = { ...prevState }
				delete newState[feedbackId]
				return newState
			})
		} else {
			throw new Error("You haven't permission to delete this feedback.")
		}
	}

	const handleUpdateFeedback = (feedbackId: string, feedBack: FeedbackType) => {
		setFeedbacks((prevState) => {
			const newState = { ...prevState, [feedbackId]: feedBack }
			return newState
		})
	}

	useEffect(() => {
		setFeedbacksList(Object.entries(feedbacks))
	}, [feedbacks])

	return (
		<article key={postId} className={styles.postContainer}>
			<header className={styles.postHeader}>
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

			<div className={styles.postContent}>
				<p>{post.content}</p>
			</div>

			<footer className={styles.postFooter}>
				<strong>Leave your feedback.</strong>
				<textarea
					id={`${postId}-comment`}
					value={comment}
					placeholder="Write a comment..."
					onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
						setComment(event.target.value)
					}
				/>
				{comment && <Button onClick={handleSubmitFeedback}>Publish</Button>}
			</footer>

			{feedbacksList.map(([id, feedback]) => (
				<Feedback
					key={id}
					feedbackId={id}
					feedback={feedback}
					user={usersMock[feedback.user]}
					readOnly={LOGGED_USER !== feedback.user && LOGGED_USER !== post.user}
					onDeleteFeedback={handleDeleteFeedback}
					onUpdateFeedback={handleUpdateFeedback}
				/>
			))}
		</article>
	)
}
