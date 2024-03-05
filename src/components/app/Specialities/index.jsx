import React from 'react';

const index = ({ speciality }) => {
  return (
    <div className='speicality-item'>
      <div className='speicality-img'>
        <img src={speciality.image} className='img-fluid' alt='Speciality' />
        <span>
          <i className='fa fa-circle' aria-hidden='true' />
        </span>
      </div>
      <p>{speciality.name}</p>
    </div>
  );
};

export default index;
