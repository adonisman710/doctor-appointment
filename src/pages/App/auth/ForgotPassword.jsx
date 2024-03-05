import assets from '../../../assets';
const Login = () => {
  return (
    <div className='content'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='account-content'>
            <div className='login-left'>
              <img
                src={assets.images.LoginBanner}
                className='img-fluid'
                alt='Doccure Login'
              />
            </div>
            <div className='login-right'>
              <div className='login-header'>
                <h3>Reset Password</h3>
              </div>
              <form>
                <div className='form-group form-focus'>
                  <input
                    name='email'
                    type='email'
                    className='form-control'
                    placeholder='email'
                    autoComplete='off'
                  />
                </div>
                <button
                  className='btn btn-primary btn-block login-btn'
                  type='submit'
                >
                  Reset Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
