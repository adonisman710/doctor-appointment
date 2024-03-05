import React, { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../../pages/App';
import ForgotPassword from '../../../pages/App/auth/ForgotPassword';
import Login from '../../../pages/App/auth/Login';
import Registration from '../../../pages/App/auth/Registration';
import Blogs from '../../../pages/App/blogs';
import Doctors from '../../../pages/App/doctors';
import DoctorProfile from '../../../pages/App/doctors/DoctorProfile';
import Footer from '../../app/Footer';
import Navbar from '../../app/Navbar';
import Loader from './loader';
const index = () => {
  useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='registration' element={<Registration />} />
            <Route path='forgot-password' element={<ForgotPassword />} />
            <Route path='doctors'>
              <Route index element={<Doctors />} />
              <Route path=':slug' element={<DoctorProfile />} />
            </Route>
            <Route path='blogs'>
              <Route index element={<Blogs />} />
            </Route>
          </Route>
        </Routes>
      </div>
      <Footer />
    </Suspense>
  );
};

export default index;
