import leslieAvatar from '../assets/leslie-alexander.svg'
import janeAvatar from '../assets/jane-smith.svg'
import jennyAvatar from '../assets/jenny-wilson.svg'
import devonAvatar from '../assets/devon-lane.svg'
import bessieAvatar from '../assets/bessie-cooper.svg'

export const usersMock: UsersObject = {
	leslieAlexander: {
		username: 'Leslie Alexander',
		title: 'UI Designer',
		avatarImg: leslieAvatar,
		coverImgSrc: '',
	},
	janeSmith: {
		username: 'Jane Smith',
		title: 'Frontend Developer',
		avatarImg: janeAvatar,
		coverImgSrc: '',
	},
	jennyWilson: {
		username: 'Jenny Wilson',
		title: 'Product Manager',
		avatarImg: jennyAvatar,
		coverImgSrc: '',
	},
	devonLane: {
		username: 'Devon Lane',
		title: 'Software Engineer',
		avatarImg: devonAvatar,
		coverImgSrc: '',
	},
	bessieCooper: {
		username: 'Bessie Cooper',
		title: 'Graphic Designer',
		avatarImg: bessieAvatar,
		coverImgSrc: '',
	},
}

export const postsMock: PostsObject = {
	'67b8084b-469c-4ad7-9d5a-63b4e7157a4e': {
		user: 'janeSmith',
		timestamp: 1695755211,
		content: `Fala galeraa 👋

		Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
		
		👉 jane.design/doctorcare
		
		#novoprojeto #nlw #rocketseat`,
	},
	'8fcff584-599c-42ae-a7ce-3540b4f93dd3': {
		user: 'devonLane',
		timestamp: 1695855211,
		content: `Fala pessoal 👋

		Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 
		
		Acesse e deixe seu feedback 👉 devonlane.design
		
		#uiux #userexperience`,
		feedbacks: {
			'b9876f1f-5224-42c1-9f6b-1c3c160bd459': {
				user: 'leslieAlexander',
				timestamp: 1695856211,
				content: `Muito bom Devon, parabéns!! 👏👏`,
				likes: ['janeSmith', 'jennyWilson', 'bessieCooper'],
			},
			'5b5f7755-e79c-49b8-aae4-d435a5a5115e': {
				user: 'jennyWilson',
				timestamp: 1695856211,
				content: `Adorei seu novo portifa Devon!`,
				likes: [
					'janeSmith',
					'jennyWilson',
					'bessieCooper',
					'leslieAlexander',
					'a',
					'b',
					'c',
					'd',
					'e',
					'f',
					'g',
					'h',
					'i',
					'j',
					'k',
					'l',
					'm',
					'n',
					'o',
					'p',
					'q',
					'r',
					's',
					't',
					'u',
					'v',
					'w',
					'x',
				],
			},
			'6740b026-5f19-4f2f-be4a-f3e83ec9379b': {
				user: 'bessieCooper',
				timestamp: 1695856211,
				content: `💜💜`,
				likes: [
					'janeSmith',
					'jennyWilson',
					'bessieCooper',
					'a',
					'b',
					'c',
					'd',
					'e',
					'f',
					'g',
					'h',
					'i',
				],
			},
		},
	},
}

export const LOGGED_USER = 'leslieAlexander'
