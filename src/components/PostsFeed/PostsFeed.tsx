import styles from './PostsFeed.module.css'

import { PostWidget } from '../PostWidget'

import { postsMock } from '../../mocks'

type PostsFeedProps = {}

export function PostsFeed({}: PostsFeedProps) {
	const postsList = Object.entries(postsMock)

	return (
		<div className={styles.wrapper}>
			{postsList.map(([postId, post]) => {
				return <PostWidget key={postId} postId={postId} post={post} />
			})}
		</div>
	)
}
