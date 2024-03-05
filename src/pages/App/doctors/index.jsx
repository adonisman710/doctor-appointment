import DoctorCard from '../../../components/app/card/DoctorCard';
import { doctores } from '../../../constants';

const index = () => {
  return (
    <div className='section all-doctors'>
      <div className='container-fluid'>
        <div className='doctors-header'>
          <h3>All Doctors</h3>
          <div className='doctors-sort'>
            <select className='form-select'>
              <option>All</option>
              <option>Rating</option>
              <option>Popular</option>
              <option>Latest</option>
              <option>Free</option>
            </select>
          </div>
        </div>
        <div className='doctors-body'>
          <div className='slick-list'>
            {doctores.map((doctor, index) => (
              <DoctorCard key={index} doctor={doctor} />
            ))}
          </div>
        </div>
        <div className='doctors-footer'>
          <button className='btn-primary'>Load More</button>
        </div>
      </div>
    </div>
  );
};

export default index;
