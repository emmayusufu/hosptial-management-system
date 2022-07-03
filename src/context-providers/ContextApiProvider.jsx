/* eslint-disable react/prop-types */
import * as React from 'react';
import AuthenticationContextProvider from './authentication-context-provider/AuthenticationContextProvider';
import FacilityManagementContextProvider from './health-facility-management-context-provider/FacilityManagementContextProvider';
import StaffManagementContextProvider from './staff-management-context-provider/StaffManagementContextProvider';
import PropTypes from 'prop-types';

function ContextApiProvider(props) {
  const { children } = props;
  return (
    <AuthenticationContextProvider>
      <FacilityManagementContextProvider>
        <StaffManagementContextProvider>
          {children}
        </StaffManagementContextProvider>
      </FacilityManagementContextProvider>
    </AuthenticationContextProvider>
  );
}

ContextApiProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ContextApiProvider;
