import './PostWidget.modules.css'
import { useState } from 'react'

import { Avatar } from '../Avatar'
import { Button } from '../Button'
import { Feedback } from '../Feedback'

interface PostWidgetProps {
	user: UserType
}

/* TODO: change static code for post information */
export function PostWidget({ user }: PostWidgetProps) {
	const [comment, setComment] = useState('')

	function submitFeedback() {
		console.log('submit comment: ', comment)
	}

	return (
		<article className="post-container">
			<header className="post-header">
				<Avatar
					username={user.username}
					orientation={'horizontal'}
					title={user.title}
					avatarImg={user.avatarImg}
				/>
				<time title="" dateTime="2023-09-25 00:00:01">
					{'Published 1h ago'}
				</time>
			</header>
			<div className="post-content">
				<p>Fala galeraa 👋</p>
				<p>
					Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
					no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
				</p>
				<p>
					👉<a href="">jane.design/doctorcare</a>
				</p>
				<p>
					<a href="">#novoprojeto</a>
					<a href="">#nlw</a>
					<a href="">#rocketseat</a>
				</p>
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
			<Feedback user={user} />
		</article>
	)
}
