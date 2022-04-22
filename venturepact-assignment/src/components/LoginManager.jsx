import React, { useState, useEffect, Fragment } from 'react';
import './styles/LoginManager.css';
import { useSelector, useDispatch } from 'react-redux';
import { letsLoginTheUser } from '../redux/actions';
import { DEFAULT_EMAIL, DEFAULT_PASSWORD } from '../config';
import { SET_USER_DETAILS } from '../redux/actionTypes';

const LoginManager = () => {
  const dispatch = useDispatch();

  const isUserLoggedIn = useSelector((state) => state?.loginer?.login);
  const userInfo = useSelector(
    (state) => state?.loginer?.userDetails?.data?.Data
  );

  const [isLoginBtnClicked, setIsLoginBtnClicked] = useState(false);
  const [customEmail, setCustomEmail] = useState('');
  const [isEmailError, setIsEmailError] = useState(false);
  const [customPassword, setCustomPassword] = useState('');
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [userCredentials, setUserCredentials] = useState({
    email: DEFAULT_EMAIL,
    password: DEFAULT_PASSWORD,
  });

  const handleCustomSubmission = () => {
    if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(customEmail) ||
      customEmail === ''
    ) {
      setIsEmailError(true);
    }
    if (customPassword === '' || customPassword.length < 8) {
      setIsPasswordError(true);
    }
  };

  useEffect(() => {
    if (
      !isEmailError &&
      !isPasswordError &&
      customEmail !== '' &&
      customPassword !== ''
    ) {
      setUserCredentials({
        email: customEmail,
        password: customPassword,
      });
      setIsLoginBtnClicked(true);
    }
  }, [isEmailError, isPasswordError]);

  useEffect(() => {
    if (isLoginBtnClicked) {
      const response = letsLoginTheUser(userCredentials);
      response.then((response) => {
        dispatch({
          type: SET_USER_DETAILS,
          payload: response,
        });
      });
    }
  }, [isLoginBtnClicked, userCredentials]);

  return (
    <Fragment>
      {isUserLoggedIn ? (
        <Fragment>
          <UserInfoCard userInfo={userInfo} />
        </Fragment>
      ) : (
        <div className="LM_container">
          <div className="LM_default_login">
            <div>LoginManager</div>
            <div> Click below to login with default credentials</div>
            <button
              className="LM_default_button"
              onClick={() => setIsLoginBtnClicked(true)}
            >
              {' '}
              Hack It 😈{' '}
            </button>
          </div>
          <div className="LM_OR">OR</div>
          <div className="LM_form">
            <input
              className="LM_input"
              name="Email"
              placeholder="Email"
              type="text"
              value={customEmail}
              onChange={(event) => {
                setIsEmailError(false);
                setCustomEmail(event.target.value);
              }}
            />
            {isEmailError && (
              <div className="LM_error">
                {' '}
                Please, input a valid email address
              </div>
            )}
            <input
              className="LM_input"
              name="Password"
              placeholder="Password"
              type="password"
              value={customPassword}
              onChange={(event) => {
                setIsPasswordError(false);
                setCustomPassword(event.target.value);
              }}
            />
            {isPasswordError && (
              <div className="error"> Please, input a valid password</div>
            )}
            <button onClick={handleCustomSubmission}> Log in </button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

const UserInfoCard = ({userInfo}) => {
  const {firstName, lastName, mobileNumber, Organization} = userInfo;
  const fullName = `${firstName} ${lastName}`;
  const { name } = Organization;

  return <Fragment className='LM_UIC_container'>
    <p className='LM_UIC_paragraph'>
      Welcome <b>Mr. {fullName}</b>. It's been an honour to work with you and <i>{name}</i>. <br />
      Just for everyone's reference, I believe we should share your contact information through which they can ask you for your assistance in future. <br />
      Contact info: <b>{mobileNumber}</b>
    </p>
  </Fragment>;
};

export default LoginManager;
