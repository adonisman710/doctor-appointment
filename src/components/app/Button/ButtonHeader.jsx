import React from 'react';
import { Link } from 'react-router-dom';

const ButtonHeader = () => {
  return (
    <Link to='login' className='button-header'>
      Login / Signup
    </Link>
  );
};

export default ButtonHeader;
