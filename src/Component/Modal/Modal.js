import Modal from 'react-modal'
import styled from 'styled-components'

const Overlay = styled.div`
width: 500px;
height: 500px;
background-color: blue;
`

function ReactModal({isOpen, children }) {
  return (
     <Modal isOpen
     style={{
   modal: {
      backgroundColor: 'red'
   }
     }}>
       <Overlay id='barev'>
      {children}
      </Overlay>
      </Modal>
  )
}

export default ReactModal