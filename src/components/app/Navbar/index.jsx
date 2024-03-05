import React from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { GrContactInfo } from 'react-icons/gr';
import { Link, NavLink } from 'react-router-dom';
import assets from '../../../assets';
import { doctorSubmenu, patientSubmenu } from '../../../constants/SubMenu';
import ButtonHeader from '../Button/ButtonHeader';

const index = () => {
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <div className='navbar-left__content'>
          <div className='navbar-left__content__logo'>
            <img src={assets.images.Logo} alt='' />
          </div>
          <ul className='navbar-left__content-menu'>
            <li>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  isActive
                    ? 'navbar-left__content__item active'
                    : 'navbar-left__content__item'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='doctors'
                className={({ isActive }) =>
                  isActive
                    ? 'navbar-left__content__item active'
                    : 'navbar-left__content__item'
                }
              >
                Doctors{' '}
                <span>
                  <BsChevronDown />
                </span>
              </NavLink>
              <ul className='submenu'>
                {doctorSubmenu.map((item, index) => (
                  <li key={index}>
                    <Link to={item.link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <NavLink
                to='patients'
                className={({ isActive }) =>
                  isActive
                    ? 'navbar-left__content__item active'
                    : 'navbar-left__content__item'
                }
              >
                Patients{' '}
                <span>
                  <BsChevronDown />
                </span>
              </NavLink>
              <ul className='submenu'>
                {patientSubmenu.map((item, index) => (
                  <li key={index}>
                    <Link to={item.link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className='navbar-right'>
        <div className='navbar-right__contact'>
          <div className='navbar-right__contact-left'>
            <GrContactInfo />
          </div>
          <div className='navbar-right__contact-right'>
            <p>contact</p>
            <p>+355573453</p>
          </div>
        </div>
        <div className='navbar-right__auth'>
          <ButtonHeader />
        </div>
      </div>
    </div>
  );
};

export default index;
