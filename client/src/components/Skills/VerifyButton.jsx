// VerifyButton.jsx
import React, { useState } from 'react';

import Certification from './assets/SMU_Certification.png';

const VerifyButton = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className='centered-container'>
      <button className='verifyBtn' onClick={openModal}>
        <span className='spanResume'>VERIFY SKILLS</span>
      </button>

      {modalVisible && (
        <div className={`modal ${modalVisible ? 'visible' : ''}`}>
          <div className='modal-content'>
            <span className='close' onClick={closeModal}>
              &times;
            </span>
            <img src={Certification} className='certification' alt='Certification' />

            <a
              href='https://www.credly.com/badges/506af386-154c-4c9e-92ff-5a774bfd8798/linked_in_profile'
              className='credlyBtn'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='spanResume'>CREDLY PAGE</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerifyButton;
