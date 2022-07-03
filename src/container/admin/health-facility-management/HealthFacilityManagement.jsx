import * as React from 'react';
import Paper from '@mui/material/Paper';
import HealthFacilityRegistration from './components/dialogs/health-facility-registration/HealthFacilityRegistration';
import HealthFacilitySummary from './components/dialogs/health-facility-summary/HealthFacilitySummary';
import HealthFacilityOwnerRegistration from './tabs/health-facility-essentials/tabs/facility-owner/components/dialogs/health-facility-owner-registration/HealthFacilityOwnerRegistration';
import FacilityAttachments from './components/dialogs/health-facility-attachments/HealthFacilityAttachments';
import Toolbar from './components/toolbar/Toolbar';
import * as localStorageControl from '@app/utilities/localStorageControl';
import { useFacilityManagementContext } from '@app/context-providers/health-facility-management-context-provider/FacilityManagementContextProvider';
import usePageTitle from '@app/hooks/usePageTitle';
import HealthFacilitiesTab from './tabs/health-facilities/HealthFacilitiesTab';
import HealthFacilityEssentialsTab from './tabs/health-facility-essentials/HealthFacilityEssesntialsTab';
import HealthFacilityDepositoryTab from './tabs/health-facilities-depository/HealthFacilityDepositoryTab';

function HealthFacilityManagement() {
  usePageTitle('Health Facility Management');
  const {
    getAllFacilityOwners,
    getAllAllFacilities,
    getAllAllFacilityLevels,
  } = useFacilityManagementContext();

  const [activeTabIndex, setActiveTabIndex] = React.useState(0);

  const [dialogState, setDialogState] = React.useState({
    healthFacilitySummary: false,
    healthFacilityAddedSuccessfully: false,
    deleteHealthFacilityPrompt: true,
    deletedHealthFacilitySuccessfully: false,
    healthFacilityOwnerRegistration: false,
    healthFacilityLevelRegistration: false,
    healthFacilityRegistration: false,
    healthFacilityAttachments: false,
  });

  const toggleDialogState = (key, value) => {
    setDialogState({ ...dialogState, [key]: value });
  };

  React.useEffect(() => {
    const user = localStorageControl.getItem('user');
    if (user) {
      getAllAllFacilities();
      getAllFacilityOwners();
      getAllAllFacilityLevels();
    }
  }, []);

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
          setActiveTabIndex={setActiveTabIndex}
          toggleDialogState={toggleDialogState}
        />
        <br />
        {activeTabIndex === 0 ? (
          <HealthFacilitiesTab toggleDialogState={toggleDialogState} />
        ) : activeTabIndex === 1 ? (
          <HealthFacilityEssentialsTab />
        ) : activeTabIndex === 2 ? (
          <HealthFacilityDepositoryTab />
        ) : null}
      </Paper>
      {/* ==================================================================== Dialogs */}
      <HealthFacilitySummary
        toggleDialogState={toggleDialogState}
        open={dialogState.healthFacilitySummary}
      />
      {/* <HealthFacilityAddedSuccessfully
        toggleDialogState={toggleDialogState}
        open={dialogState.healthFacilityAddedSuccessfully}
      />
      <DeleteHealthFacilityPrompt
        toggleDialogState={toggleDialogState}
        open={dialogState.deleteHealthFacilityPrompt}
      />
      <DeletedHealthFacilitySuccessfully
        toggleDialogState={toggleDialogState}
        open={dialogState.deletedHealthFacilitySuccessfully}
      /> */}

      <HealthFacilityOwnerRegistration
        toggleDialogState={toggleDialogState}
        open={dialogState.healthFacilityOwnerRegistration}
      />
      <HealthFacilityRegistration
        toggleDialogState={toggleDialogState}
        open={dialogState.healthFacilityRegistration}
      />
      <FacilityAttachments
        open={dialogState.healthFacilityAttachments}
        toggleDialogState={toggleDialogState}
      />
    </>
  );
}

export default HealthFacilityManagement;
