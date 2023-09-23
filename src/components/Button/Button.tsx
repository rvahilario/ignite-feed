import { ReactNode } from 'react'
import './Button.modules.css'

interface ButtonProps {
	variant?: 'primary' | 'outline' | 'text'
	children: ReactNode
}

export function Button({ variant = 'primary', children }: ButtonProps) {
	return <button className={`btn ${variant}`}>{children}</button>
}
