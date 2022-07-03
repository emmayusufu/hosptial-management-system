/* eslint-disable react/jsx-no-constructed-context-values */
import * as React from 'react';
import PropTypes from 'prop-types';
import * as localStorageControl from '@app/utilities/localStorageControl';
import axios from 'axios';
import ApiService from '@app/services/ApiService';

const AuthenticationContext = React.createContext(null);

function AuthenticationContextProvider(props) {
  const [authState, setAuthState] = React.useState({
    loggedIn: false,
    authErrorMessageVisible: false,
    authErrorMessage: '',
    authProgress: false,
    user: null,
  });

  const [loginFailedAttempts, setLoginFailedAttempts] = React.useState(null);
  const [openSessionDialog, setOpenSessionDialog] = React.useState(false);

  React.useEffect(() => {
    const num = localStorageControl.getItem('loginFailedAttempts');
    setLoginFailedAttempts(num);
    window.addEventListener('storage', () => {
      const attempts = localStorageControl.getItem('loginFailedAttempts');
      setLoginFailedAttempts(attempts);
    });

    const user = localStorageControl.getItem('user');
    if (user) {
      setAuthState({ ...authState, user, loggedIn: true });
    }
  }, []);

  const loginHandler = (data, callback) => {
    setAuthState({ ...authState, authProgress: true });
    ApiService.post('users-ms/login', data)
      .then(async (response) => {
        const { personid, username, token } = response.headers;

        if (response.status === 200) {
          const { default: jwtDecode } = await import('jwt-decode');

          const decoded = jwtDecode(token);

          const user = {
            personaId: personid,
            userName: username,
            accessToken: token,
            authorities: decoded.authorities,
          };

          axios.defaults.headers.common.Authorization = `Bearer ${token}`;

          localStorageControl.setItem('user', user);

          localStorageControl.setItem('initialLogin', true);

          setAuthState({
            ...authState,
            authProgress: false,
            loggedIn: true,
            user,
          });

          setTimeout(() => {
            setAuthState({ ...authState, initialLogin: false });
          }, 4000);
        }
        callback(response.status);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const logoutHandler = (callback) => {
    localStorageControl.removeItem('user');
    setAuthState({ ...authState, loggedIn: false });
    callback();
  };

  const updateAuthState = (object) => {
    const { key, value } = object;
    setAuthState({ ...authState, [key]: value });
  };

  const setNewPasswordHandler = (body, callback) => {
    ApiService.post('/user-ms/v1/password-reset', body)
      .then((response) => {
        callback(response.status);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };
  const sendPasswordRequestEmailHandler = (body, callback) => {
    ApiService.post('/user-ms/v1/password-request', body)
      .then((response) => {
        callback(response.status);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };
  const sendQuestionsResponseHandler = (body, callback) => {
    ApiService.post('/user-ms/v1/questions-response', body)
      .then((response) => {
        callback(response.status);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  const { children } = props;
  return (
    <AuthenticationContext.Provider
      value={{
        authState,
        updateAuthState,
        loginHandler,
        logoutHandler,
        loginFailedAttempts,
        setLoginFailedAttempts,
        setNewPasswordHandler,
        sendPasswordRequestEmailHandler,
        sendQuestionsResponseHandler,
        setOpenSessionDialog,
        openSessionDialog
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}

AuthenticationContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export const useAuthenticationContext = () =>
  React.useContext(AuthenticationContext);

export default AuthenticationContextProvider;
