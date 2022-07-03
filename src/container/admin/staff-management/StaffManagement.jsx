/* eslint-disable react/prop-types */
import * as React from 'react';
import Paper from '@mui/material/Paper';
import StaffMemberRegistration from './components/dialogs/staff-member-registration/StaffMemberRegistration';
import StaffMemberSummary from './components/dialogs/staff-member-summary/StaffMemberSummary';
import StaffMemberRegistrationSuccessful from './components/dialogs/staff-member-registration-successful/StaffMemberRegistrationSuccessful';
import StaffMemberRegistrationPrompt from './components/dialogs/staff-member-registration-prompt/StaffMemberRegistrationPrompt';
import Toolbar from './components/toolbar/Toolbar';
import usePageTitle from '@app/hooks/usePageTitle';
import RegisterStaff from './tabs/register-staff/RegisterStaff';
import StaffList from './tabs/staff-list/StaffList';

function StaffManagement() {
  usePageTitle('Staff Management');
  const [dialogState, setDialogState] = React.useState({
    staffMemberSummary: false,
    staffAddedSuccessfully: false,
    staffMemberRegistration: false,
    addStaffMemberPrompt: false,
  });

  const [activeTabIndex, setActiveTabIndex] = React.useState(0);

  const toggleDialogState = (key, value) => {
    setDialogState({ ...dialogState, [key]: value });
  };

  const toggleTab = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <>
      <Paper
        variant="outlined"
        sx={{
          padding: '2rem',
        }}
      >
        <Toolbar
          activeTabIndex={activeTabIndex}
          toggleDialogState={toggleDialogState}
          toggleTab={toggleTab}
        />
        {activeTabIndex === 0 ? (
          <RegisterStaff />
        ) : activeTabIndex === 1 ? (
          <StaffList />
        ) : null}
      </Paper>
      <StaffMemberRegistration
        toggleDialogState={toggleDialogState}
        staffRegistrationDialogOpen={dialogState.staffMemberRegistration}
      />
      <StaffMemberSummary
        toggleDialogState={toggleDialogState}
        open={dialogState.staffMemberSummary}
      />
      <StaffMemberRegistrationSuccessful
        toggleDialogState={toggleDialogState}
        staffAddedDialogOpen={dialogState.staffAddedSuccessfully}
      />
      <StaffMemberRegistrationPrompt
        toggleDialogState={toggleDialogState}
        addStaffMemberDialogPromptOpen={dialogState.addStaffMemberPrompt}
      />
    </>
  );
}

export default StaffManagement;
