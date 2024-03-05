import {
  AiFillCheckCircle,
  AiFillDollarCircle,
  AiFillInfoCircle,
  AiFillStar,
  AiOutlineStar,
} from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdOutlineAccessTimeFilled } from 'react-icons/md';
import { Link } from 'react-router-dom';

const DoctorCard = ({doctor}) => {
  return (
    <div className='slick-slide'>
      <div className='profile-widget'>
        <div className='doc-img'>
          <Link to='doctors/doctor-slug'>
            <img className='img-fluid' alt='User Image' src={doctor.image} />
          </Link>
          <abbr className='fav-btn'>
            <i className='far fa-bookmark' />
          </abbr>
        </div>
        <div className='pro-content'>
          <h3 className='title'>
            <Link to='doctors/doctor-slug'>{doctor.name}</Link>
            <AiFillCheckCircle
              style={{
                color: 'green',
                marginLeft: 6,
                fontSize: 20,
              }}
            />
          </h3>
          <p className='speciality'>{doctor.speciality}</p>
          <div className='rating'>
            <AiFillStar style={{ color: '#f4c150' }} />
            <AiFillStar style={{ color: '#f4c150' }} />
            <AiFillStar style={{ color: '#f4c150' }} />
            <AiFillStar style={{ color: '#f4c150' }} />
            <AiOutlineStar />
            <i className='fas fa-star' />
            <span className='d-inline-block average-rating'>
              ({doctor.review})
            </span>
          </div>
          <ul className='available-info'>
            <li>
              <FaMapMarkerAlt /> {doctor.address}
            </li>
            <li>
              <MdOutlineAccessTimeFilled />
              {doctor.availableTime}
            </li>
            <li>
              <AiFillDollarCircle /> {doctor.fees}
              <AiFillInfoCircle title='Lorem Ipsum' />
            </li>
          </ul>
          <div className='row'>
            <div className='col-6'>
              <Link to='doctors/doctor-slug' className='view-btn'>
                View Profile
              </Link>
            </div>
            <div className='col-6'>
              <a className='book-btn'>Book Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
