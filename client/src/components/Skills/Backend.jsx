import React from 'react';

const Backend = () => {
  return (
    <div className='skills__content'>
      <h3 className='skills__title'>Backend Skills</h3>

      <div className='skills__box'>
        <div className='skills__group'>
          <div className='skills__data'>
            <i class='bx bx-badge-check'></i>

            <div>
              <h3 className='skills__name'>Express</h3>
              <span className='skills__level'>&nbsp;</span>
            </div>
          </div>

          <div className='skills__data'>
            <i class='bx bx-badge-check'></i>

            <div>
              <h3 className='skills__name'>NodeJs</h3>
              <span className='skills__level'>&nbsp;</span>
            </div>
          </div>

          <div className='skills__data'>
            <i class='bx bx-badge-check'></i>

            <div>
              <h3 className='skills__name'>GraphQL</h3>
              <span className='skills__level'>&nbsp;</span>
            </div>
          </div>
        </div>

        <div className='skills__group'>
          <div className='skills__data'>
            <i class='bx bx-badge-check'></i>

            <div>
              <h3 className='skills__name'>MySQL</h3>
              <span className='skills__level'>&nbsp;</span>
            </div>
          </div>

          <div className='skills__data'>
            <i class='bx bx-badge-check'></i>

            <div>
              <h3 className='skills__name'>MongoDB</h3>
              <span className='skills__level'>&nbsp;</span>
            </div>
          </div>

          <div className='skills__data'>
            <i class='bx bx-badge-check'></i>

            <div>
              <h3 className='skills__name'>SQL</h3>
              <span className='skills__level'>&nbsp;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
