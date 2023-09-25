import './Feedback.modules.css'
import { Avatar } from '../Avatar'
import { Button } from '../Button'

interface FeedbackProps {
	user: UserType
}

export function Feedback({ user }: FeedbackProps) {
	return (
		<div className="feedback">
			<Avatar
				username={user.username}
				orientation={'only-avatar'}
				// title={user.title}
				avatarImg={user.avatarImg}
			/>
			<div className="fb-wrapper">
				<div className="fb-container">
					<div className="fb-header">
						<div>
							<strong>{user.username}</strong>
							<time title="">3h ago</time>
						</div>
						<Button variant="like" onClick={() => console.log('like')} />
					</div>
					<div className="fb-content"></div>
				</div>
				<div className="fb-like"></div>
			</div>
		</div>
	)
}
