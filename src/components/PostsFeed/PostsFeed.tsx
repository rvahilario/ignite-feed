import './PostsFeed.modules.css'

import { PostWidget } from '../PostWidget'

import { postsMock } from '../../mocks'

type PostsFeedProps = {}

export function PostsFeed({}: PostsFeedProps) {
	const postsList = Object.entries(postsMock)

	return (
		<div className="feed-wrapper">
			{postsList.map(([postId, post]) => {
				return <PostWidget key={postId} postId={postId} post={post} />
			})}
		</div>
	)
}
