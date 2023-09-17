import React from 'react'
import Modal from 'react-modal';
import './sucess-modal.css';
import { Link } from 'react-router-dom';
const SucessModal = ({modalOpen, setModalOpen}) => {

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor:"#b76e79",
          borderRadius:"12px",
        },
      };
      
  return (
    <Modal isOpen={modalOpen} style={customStyles}>
        <div className='modal-inner'>
            <label>Exepense Added Successfully</label>
            <img src={require('../images/added-image.png')} alt='Expense Added' className='added-image'></img>
            <Link to='/'>
            <div className='take-home-button'>
            <i class="fi fi-rr-house-blank"></i>
              Home
            </div>
            </Link>
        </div>
    </Modal>
  )
}

export default SucessModal