import * as React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getItem } from '@app/utilities/localStorageControl';

function RequireAuth(props) {
  const { children } = props;
  const location = useLocation();

  const user = getItem('user');

  // if (!user) {
  //   return <Navigate to="/" state={{ from: location }} replace />;
  // }

  return children;
}

RequireAuth.propTypes = {
  children: PropTypes.element.isRequired,
};

export default RequireAuth;
