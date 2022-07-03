import usePageTitle from '@app/hooks/usePageTitle';
import * as React from 'react';
import UserManagementToolbar from './components/user-management-toolbar/UserManagementToolbar';
import Paper from '@mui/material/Paper';
import switchBaseClasses from '@mui/material/internal/switchBaseClasses';
import RequestToUseSystem from './tabs/request-to-use-system/RequestToUseSystem';
import ApproveRequests from './tabs/approve-requests/ApproveRequests';
import ConfirmApprovedRequests from './tabs/confirm-approved-requests/ConfirmApprovedRequest';
import RequestsTab from './tabs/requests/RequestsTab';
import StaffList from './tabs/staff-list/StaffList';

function UserManagement() {
  usePageTitle('User Management');

  const [activeTabIndex, setActiveTabIndex] = React.useState(0);

  const renderComponent = (index) => {
    switch (index) {
      case 0:
        return <RequestToUseSystem />;

      case 1:
        return <ApproveRequests />;

      case 2:
        return <ConfirmApprovedRequests />;

      case 3:
        return <RequestsTab />;

      case 4:
        return <StaffList />;

      default:
        break;
    }
  };

  return (
    <Paper
      variant="outlined"
      sx={{
        padding: '2rem',
      }}
    >
      <UserManagementToolbar
        activeTabIndex={activeTabIndex}
        setActiveTabIndex={setActiveTabIndex}
      />
      <br />
      {renderComponent(activeTabIndex)}
    </Paper>
  );
}

export default UserManagement;
