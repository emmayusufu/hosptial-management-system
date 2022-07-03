/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/require-default-props */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import Stack from '@mui/material/Stack';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faArrowLeft,
  faXmark,
} from '@fortawesome/pro-solid-svg-icons';
import StepOne from './steps/StepOne';
import StepTwo from './steps/StepTwo';
import StepThree from './steps/StepThree';
import StyledStepConnector from '@app/shared-components/styled-step-connector/StyledStepConnector';
import StyledStepIconRoot from '@app/shared-components/styled-step-icon-root/StyledStepIconRoot';

const steps = ['Facility Details', 'Location/Contact Details', 'Other Details'];

export default function HealthFacilityRegistrationDialog(props) {
  const { open, toggleDialogState } = props;

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

  const [values, setValues] = React.useState();

  const [loading, setLoading] = React.useState(false);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const updateValues = (key, value) => {
    setValues({ ...values, [key]: value });
  };

  const handleSubmit = () => {
    setLoading(true);
    const body = {};
  };

  const isLastStep = activeStep === steps.length - 1;

  return (
    <Dialog open={open} maxWidth="md" fullWidth scroll="body">
      <Stack
        sx={{
          padding: '40px',
        }}
        spacing={4}
      >
        <Stack
          alignItems="center"
          justifyContent="space-between"
          direction="row"
        >
          <Typography variant="body1" fontSize="2rem" letterSpacing="0.3px">
            Add Health Facility
          </Typography>
          <IconButton
            sx={{
              width: '28px',
              height: '28px',
            }}
            size="small"
            onClick={() => {
              toggleDialogState('healthFacilityRegistration', false);
            }}
          >
            <FontAwesomeIcon icon={faXmark} fontSize="15px" />
          </IconButton>
        </Stack>
        <Box sx={{ width: '100%' }}>
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

          <>
            {/* ===================================== data container */}
            <Stack
              direction="column"
              spacing={2}
              sx={{
                mt: '2rem',
              }}
            >
              {/* ======================================== rendering steps conditionally */}
              {(() => {
                switch (activeStep + 1) {
                  case 1:
                    return (
                      <StepOne
                        values={values}
                        updateValues={updateValues}
                        handleChange={handleChange}
                      />
                    );
                  case 2:
                    return (
                      <StepTwo values={values} handleChange={handleChange} />
                    );
                  case 3:
                    return <StepThree values={values} setValues={setValues} />;
                  default:
                    return null;
                }
              })()}
              <Box sx={{ display: 'flex', flexDirection: 'row', mt: 2 }}>
                {activeStep !== 0 && (
                  <Button
                    variant="outlined"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1, width: '20%' }}
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
                    onClick={() => {
                      toggleDialogState('healthFacilityRegistration', false);
                    }}
                    variant="outlined"
                    color="error"
                    sx={{
                      width: '20%',
                      marginRight: '1rem',
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() => {
                      if (isLastStep) {
                        toggleDialogState('healthFacilityRegistration', false);
                        toggleDialogState('healthFacilitySummary', true);
                      } else {
                        handleNext();
                      }
                    }}
                    sx={{
                      width: '20%',
                    }}
                  >
                    {isLastStep ? 'Finish' : 'Next'}
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
          </>
        </Box>
      </Stack>
    </Dialog>
  );
}
