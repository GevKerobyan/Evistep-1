import { useEffect } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

const CloseBtn = styled.button`
	position: absolute;
	height: 60px;
	width: 60px;
	right: 0;
	top: 0;
	border: none;
	border-bottom-left-radius: 100%;
	background: blue;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Xspan = styled.span`
	height: 30px;
	width: 30px;
	font-size: 25px;
	color: white;
	transform: translate(25%, -25%);
	display: flex;
	align-items: center;
	justify-content: center;
`;

function ReactModal({ setModalOpen, openPost, children }) {
	useEffect(() => {
		console.log(openPost, ' : openPost');
	}, [openPost]);

	const handleOverlayClick = () => {
		console.log('mtav')
		setModalOpen(false)
	}

	return (
		<Modal
			isOpen={openPost}
			onRequestClose={() => handleOverlayClick()}
			shouldCloseOnOverlayClick={true}
			ariaHideApp={true}
			style={{
				overlay: {
					position: 'fixed',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					zIndex: 1000,
					backgroundColor: 'rgba(0,0,0, 0.85)',
				},
				content: {
					position: 'absolute',
					width: '650px',
					top: '40px',
					left: '40px',
					right: '40px',
					bottom: '40px',
					border: '1px solid #ccc',
					background: '#fff',
					overflow: 'auto',
					WebkitOverflowScrolling: 'touch',
					borderRadius: '4px',
					outline: 'none',
					padding: '10px 40px',
					margin: '0 auto',
					boxSizing: 'content-box',
					border: 'none',
				},
			}}
		>
			<CloseBtn onClick={() => handleOverlayClick()}>
				<Xspan>X</Xspan>
			</CloseBtn>
			{children}
		</Modal>
	);
}

export default ReactModal;
