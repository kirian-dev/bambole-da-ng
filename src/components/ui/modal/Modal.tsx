import { FC, useEffect, useCallback, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

interface ModalProps {
	children: ReactNode;
	onClose: () => void;
	size?: 'small' | 'large';
}

export const Modal: FC<ModalProps> = ({ children, onClose, size }) => {
	const modalContainer = document.createElement('div');

	modalContainer.classList.add('modal');

	const handleClose = useCallback(() => {
		document.body.removeChild(modalContainer);

		onClose();
	}, [modalContainer, onClose]);

	useEffect(() => {
		document.body.appendChild(modalContainer);

		const handleEscapeKey = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				handleClose();
			}
		};
		document.addEventListener('keydown', handleEscapeKey);

		return () => {
			if (modalContainer && document.body.contains(modalContainer)) {
				document.body.removeChild(modalContainer);
			}
			document.removeEventListener('keydown', handleEscapeKey);
		};
	}, [handleClose, modalContainer]);

	return createPortal(
		<div className="modal-overlay" onClick={handleClose}>
			<motion.div
				className={`modal-content ${
					size === 'large' ? 'modal-content-large' : ''
				}`}
				onClick={e => e.stopPropagation()}
				initial={{ opacity: 0, y: '-50%' }}
				animate={{ opacity: 1, y: '0%' }}
				exit={{ opacity: 0, y: '50%' }}
				transition={{ duration: 0.3, ease: 'easeInOut' }}
			>
				{children}
			</motion.div>
		</div>,
		modalContainer
	);
};
