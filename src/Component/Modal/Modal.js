import { useEffect } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

const CloseBtn = styled.button`
	position: absolute;
	height: 20px;
	width: 20px;
	right: 10px;
	top: 10px;
	border: none;
	border-radius: 5px;
  background: none;
`;

function ReactModal({ setModalOpen, isOpen, children }) {
	useEffect(() => {
		console.log(isOpen, ' : isOpen');
	}, [isOpen]);
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={() => setModalOpen(false)}
			htmlOpenClassName='ReactModal__Html--open'
			bodyOpenClassName='ReactModal__Body--open'
			shouldCloseOnOverlayClick={true}
			shouldFocusAfterRender={true}
			ariaHideApp={true}
			style={{
				overlay: {
					position: 'fixed',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					backgroundColor: 'rgba(0,0,0, 0.75)',
					zIndex: 1000,
          
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
        },
			}}
		>
			<CloseBtn onRequestClose={() => setModalOpen(false)}>X</CloseBtn>
			{children}
		</Modal>
	);
}

export default ReactModal;
