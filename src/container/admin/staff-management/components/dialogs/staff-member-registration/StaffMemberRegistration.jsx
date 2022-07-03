import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Stepper from '@mui/material/Stepper';
import StepLabel from '@mui/material/StepLabel';
import Step from '@mui/material/Step';
import Box from '@mui/material/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
  faArrowRight,
  faArrowLeft,
} from '@fortawesome/pro-solid-svg-icons';
import StyledStepConnector from '@app/shared-components/styled-step-connector/StyledStepConnector';
import StyledStepIconRoot from '@app/shared-components/styled-step-icon-root/StyledStepIconRoot';
import PersonalDetailsStep from './steps/personal-details/PersonalDetails';
import LocationDetailsStep from './steps/location-details/LocationDetails';
import WorkDetailsStep from './steps/work-details/workDetails';
import FingerprintAuthenticationStep from './steps/fingerprint-authentication/FingerprintAuthentication';

const steps = [
  'Personal Details',
  'Fingerprint Authentication',
  'Location/Contact Details',
  'Work Details',
];

function StaffRegistrationDialog(props) {
  // eslint-disable-next-line react/prop-types
  const { staffRegistrationDialogOpen, toggleDialogState } = props;

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const renderComponent = (index) => {
    switch (index) {
      case 0:
        return <PersonalDetailsStep />;
      case 1:
        return <FingerprintAuthenticationStep />;
      case 2:
        return <LocationDetailsStep />;
      case 3:
        return <WorkDetailsStep />;
      default:
        return null;
    }
  };

  const isLastStep = activeStep === steps.length - 1;

  return (
    <Dialog
      open={staffRegistrationDialogOpen}
      maxWidth="md"
      scroll="body"
      fullWidth
    >
      <Stack
        direction="column"
        spacing={3}
        sx={{ width: '100%', padding: '4rem' }}
      >
        <Stack
          alignItems="center"
          justifyContent="space-between"
          direction="row"
        >
          <Typography variant="body1" fontSize="2rem" letterSpacing="0.3px">
            Staff Member Registration
          </Typography>
          <IconButton
            sx={{
              width: '28px',
              height: '28px',
            }}
            size="small"
            onClick={() => {
              toggleDialogState('staffMemberRegistration', false);
            }}
          >
            <FontAwesomeIcon icon={faXmark} fontSize="15px" />
          </IconButton>
        </Stack>

        <Stepper
          activeStep={activeStep}
          alternativeLabel
          connector={<StyledStepConnector />}
        >
          {steps.map((label) => {
            return (
              <Step key={label}>
                <StepLabel StepIconComponent={StyledStepIconRoot}>
                  <Typography fontSize="1.4rem">{label}</Typography>
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <br />
        <Typography
          color="#D51A52"
          fontStyle="italic"
          fontSize="1.3rem"
          letterSpacing="0.5px"
        >
          *Mandatory Fields
        </Typography>
        <br />

        <Stack direction="column" spacing={2}>
          {renderComponent(activeStep)}
          <Box sx={{ display: 'flex', flexDirection: 'row', mt: 2 }}>
            {activeStep !== 0 && (
              <Button
                variant="outlined"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1, width: '20rem' }}
              >
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  style={{
                    marginRight: '8px',
                  }}
                />
                Back
              </Button>
            )}
            <Box sx={{ flex: '1 1 auto' }} />

            <>
              <Button
                onClick={() =>
                  toggleDialogState('staffMemberRegistration', false)
                }
                variant="outlined"
                color="error"
                sx={{
                  width: '20rem',
                  marginRight: '1rem',
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  if (activeStep === steps.length - 1) {
                    toggleDialogState('staffMemberSummary', true);
                  } else {
                    handleNext();
                  }
                }}
                sx={{
                  width: '20rem',
                }}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                {!isLastStep && (
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{
                      marginLeft: '8px',
                    }}
                  />
                )}
              </Button>
            </>
          </Box>
        </Stack>
      </Stack>
    </Dialog>
  );
}

export default StaffRegistrationDialog;
