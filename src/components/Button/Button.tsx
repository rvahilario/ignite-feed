import { ReactNode, MouseEvent } from 'react'
import './Button.modules.css'

interface ButtonProps {
	variant?: 'primary' | 'outline' | 'text'
	children: ReactNode
	onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

export function Button({
	variant = 'primary',
	children,
	onClick,
}: ButtonProps) {
	return (
		<button className={`btn ${variant}`} onClick={onClick}>
			{children}
		</button>
	)
}
