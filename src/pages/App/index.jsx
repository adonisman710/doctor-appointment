import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import assets from '../../assets';
import bgImage from '../../assets/images/search-bg.png';
import DoctorCard from '../../components/app/card/DoctorCard';
import Speciality from '../../components/app/Specialities';
import { doctores, features } from '../../constants';
import { Specialities } from '../../constants/Specialities';

const index = () => {
  return (
    <>
      <section
        className='section-search'
        style={{
          background: `#f9f9f9 url(${bgImage}) no-repeat bottom center `,
        }}
      >
        <div className='container-fluid'>
          <div className='banner-wrapper'>
            <div className='banner-header'>
              <h1>Search Doctor, Make an Appointment</h1>
              <p>
                Discover the best doctors, clinic & hospital the city nearest to
                you.
              </p>
            </div>
            <div className='search-box'>
              <form>
                <div className='form-group search-location'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Search Location'
                  />
                  <span className='form-text'>Based on your Location</span>
                </div>
                <div className='form-group search-info'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Search Doctors, Clinics, Hospitals, Diseases Etc'
                  />
                  <span className='form-text'>
                    Ex : Dental or Sugar Check up etc
                  </span>
                </div>
                <button type='submit' className='btn btn-primary search-btn'>
                  <BiSearch style={{ fontSize: '1.5rem' }} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className='section section-specialities'>
        <div className='container-fluid'>
          <div className='section-header'>
            <h2>Clinic and Specialities</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className='row'>
            {/* Slider */}
            <div className='specialities-slider'>
              {Specialities.map((speciality, index) => (
                <div className='slick-slide' key={index}>
                  <Speciality speciality={speciality} />
                </div>
              ))}
            </div>
            {/* /Slider */}
          </div>
        </div>
      </section>
      <section className='section section-doctor'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='section-header '>
                <h2>Book Our Doctor</h2>
                <p>Lorem Ipsum is simply dummy text </p>
              </div>
              <div className='about-content'>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum.
                </p>
                <p>
                  web page editors now use Lorem Ipsum as their default model
                  text, and a search for 'lorem ipsum' will uncover many web
                  sites still in their infancy. Various versions have evolved
                  over the years, sometimes
                </p>
                <Link to='doctors' className='read-more'>
                  <span>Read More..</span>
                </Link>
              </div>
            </div>
            <div className='col-lg-8'>
              <div className='doctor-slider'>
                <div className='slick-list'>
                  <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    slidesPerView={2.8}
                  >
                    {doctores.map((doctor, index) => (
                      <SwiperSlide key={index}>
                        <DoctorCard doctor={doctor} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section section-features'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='features-img'>
              <img
                src={assets.images.features.FeatureIcon}
                className='img-fluid'
                alt='Feature'
              />
            </div>
            <div className='col-md-7'>
              <div className='section-header'>
                <h2 className='mt-2'>Availabe Features in Our Clinic</h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.{' '}
                </p>
              </div>
              <div className='features-slider'>
                <div className='slick-list'>
                  <div className='slick-track'>
                    <Swiper
                      navigation={true}
                      modules={[Navigation]}
                      spaceBetween={10}
                      slidesPerView={3.5}
                    >
                      {features.map((item, index) => (
                        <SwiperSlide key={index}>
                          <div className='slick-slide'>
                            <div className='feature-item'>
                              <img
                                src={item.image}
                                className='img-fluid'
                                alt='Feature'
                              />
                              <p>{item.title}</p>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section section-blogs'>
        <div className='container-fluid'>
          <div
            className='section-header text-center aos aos-init aos-animate'
            data-aos='fade-up'
          >
            <h2>Blogs and News</h2>
            <p className='sub-title'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div
            className='row blog-grid-row aos aos-init aos-animate'
            data-aos='fade-up'
          >
            <div className='col-md-6 col-lg-3 col-sm-12'>
              <div className='blog grid-blog'>
                <div className='blog-image'>
                  <a>
                    <img
                      className='img-fluid'
                      src={assets.images.blogs.blog1}
                      alt='Post Image'
                    />
                  </a>
                </div>
                <div className='blog-content'>
                  <ul className='entry-meta meta-item'>
                    <li>
                      <div className='post-author'>
                        <a href='doctor-profile.html'>
                          <img
                            src={assets.images.blogs.blog1author}
                            alt='Post Author'
                          />{' '}
                          <span>Dr. Ruby Perrin</span>
                        </a>
                      </div>
                    </li>
                    <li>
                      <i className='far fa-clock' /> 4 Dec 2019
                    </li>
                  </ul>
                  <h3 className='blog-title'>
                    <a href='blog-details.html'>
                      Doccure – Making your clinic painless visit?
                    </a>
                  </h3>
                  <p className='mb-0'>
                    Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                    sed do eiusmod tempor.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-3 col-sm-12'>
              <div className='blog grid-blog'>
                <div className='blog-image'>
                  <a href='blog-details.html'>
                    <img
                      className='img-fluid'
                      src={assets.images.blogs.blog2}
                      alt='Post Image'
                    />
                  </a>
                </div>
                <div className='blog-content'>
                  <ul className='entry-meta meta-item'>
                    <li>
                      <div className='post-author'>
                        <a href='doctor-profile.html'>
                          <img
                            src={assets.images.blogs.blog2author}
                            alt='Post Author'
                          />{' '}
                          <span>Dr. Darren Elder</span>
                        </a>
                      </div>
                    </li>
                    <li>
                      <i className='far fa-clock' /> 3 Dec 2019
                    </li>
                  </ul>
                  <h3 className='blog-title'>
                    <a href='blog-details.html'>
                      What are the benefits of Online Doctor Booking?
                    </a>
                  </h3>
                  <p className='mb-0'>
                    Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                    sed do eiusmod tempor.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-3 col-sm-12'>
              <div className='blog grid-blog'>
                <div className='blog-image'>
                  <a href='blog-details.html'>
                    <img
                      className='img-fluid'
                      src={assets.images.blogs.blog3}
                      alt='Post Image'
                    />
                  </a>
                </div>
                <div className='blog-content'>
                  <ul className='entry-meta meta-item'>
                    <li>
                      <div className='post-author'>
                        <a href='doctor-profile.html'>
                          <img
                            src={assets.images.blogs.blog3author}
                            alt='Post Author'
                          />{' '}
                          <span>Dr. Deborah Angel</span>
                        </a>
                      </div>
                    </li>
                    <li>
                      <i className='far fa-clock' /> 3 Dec 2019
                    </li>
                  </ul>
                  <h3 className='blog-title'>
                    <a href='blog-details.html'>
                      Benefits of consulting with an Online Doctor
                    </a>
                  </h3>
                  <p className='mb-0'>
                    Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                    sed do eiusmod tempor.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-3 col-sm-12'>
              <div className='blog grid-blog'>
                <div className='blog-image'>
                  <a href='blog-details.html'>
                    <img
                      className='img-fluid'
                      src={assets.images.blogs.blog4}
                      alt='Post Image'
                    />
                  </a>
                </div>
                <div className='blog-content'>
                  <ul className='entry-meta meta-item'>
                    <li>
                      <div className='post-author'>
                        <a href='doctor-profile.html'>
                          <img
                            src={assets.images.blogs.blog4author}
                            alt='Post Author'
                          />{' '}
                          <span>Dr. Sofia Brient</span>
                        </a>
                      </div>
                    </li>
                    <li>
                      <i className='far fa-clock' /> 2 Dec 2019
                    </li>
                  </ul>
                  <h3 className='blog-title'>
                    <a href='blog-details.html'>
                      5 Great reasons to use an Online Doctor
                    </a>
                  </h3>
                  <p className='mb-0'>
                    Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                    sed do eiusmod tempor.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='view-all'>
            <Link to='/blogs' className='btn'>
              View All
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
