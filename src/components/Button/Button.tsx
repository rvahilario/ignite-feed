import { ReactNode, MouseEvent } from 'react'
import './Button.modules.css'
import { DotOutline, ThumbsUp } from '@phosphor-icons/react'

interface ButtonProps {
	variant?: 'primary' | 'outline' | 'like' | 'delete'
	children?: ReactNode
	onClick: (event: MouseEvent<HTMLButtonElement>) => void
	likes?: number
	pressed?: boolean
}

export function Button({
	variant = 'primary',
	children,
	onClick,
	likes = 0,
	pressed = false,
}: ButtonProps) {
	switch (variant) {
		default:
			return (
				<button className={`btn ${variant}`} onClick={onClick}>
					{children}
				</button>
			)

		case 'like':
			return (
				<button className={`like -${pressed && 'pressed'}`} onClick={onClick}>
					<ThumbsUp size={'0.875rem'} weight="bold" />
					<strong>
						Like
						<DotOutline size={'0.875rem'} weight="bold" />
						{likes}
					</strong>
				</button>
			)
	}
}
