type UserType = {
	username: string
	title: string
	avatarImg: string
	coverImgSrc: string
}

type UsersObject = {
	[key: string]: UserType
}

type FeedbackType = {
	user: string
	timestamp: number
	content: string
	likes: number
}

type FeedbacksObject = {
	[feedbackId: string]: FeedbackType
}

type PostType = {
	user: string
	timestamp: EpochTimeStamp
	content: string
	feedbacks?: FeedbacksObject
}

type PostsObject = {
	[postId: string]: PostType
}
