import { ButtonHTMLAttributes, FC } from 'react';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

import styles from './Button.module.css';

const Button: FC<IButton> = ({ className, children, ...rest }) => {
	return (
		<button className={`${styles.button} ${className}`} {...rest}>
			{children}
		</button>
	);
};

export default Button;
