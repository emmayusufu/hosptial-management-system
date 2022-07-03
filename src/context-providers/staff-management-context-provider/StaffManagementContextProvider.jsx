import * as React from 'react';
import PropTypes from 'prop-types';

const StaffManagementContext = React.createContext();

function StaffManagementContextProvider(props) {
  const { children } = props;
  return (
    <StaffManagementContext.Provider value={null}>
      {children}
    </StaffManagementContext.Provider>
  );
}

StaffManagementContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export const useStaffManagementContext = () =>
  React.useContext(StaffManagementContext);

export default StaffManagementContextProvider;
