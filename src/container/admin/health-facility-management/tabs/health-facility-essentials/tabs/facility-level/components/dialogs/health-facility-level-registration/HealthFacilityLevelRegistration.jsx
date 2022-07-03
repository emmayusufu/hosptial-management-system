/* eslint-disable react/prop-types */
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/pro-solid-svg-icons';
import { useFacilityManagementContext } from '@app/context-providers/health-facility-management-context-provider/FacilityManagementContextProvider';
import FormInput from '@app/shared-components/form-input/FormInput';
import FormTextInput from '@app/shared-components/form-text-input/FormTextInput';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextInput from '@app/shared-components/text-input/TextInput';
import FormTimePicker from '@app/shared-components/form-time-picker/FormTimePicker';
import * as Yup from 'yup';

function HealthFacilityLevelRegistrationDialog(props) {
  const { open, toggleDialogState } = props;

  const [loading, setLoading] = React.useState(false);

  const facilityManagementContext = useFacilityManagementContext();

  const requiredField = 'This field must not be empty';

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(requiredField),
    shortName: Yup.string().required(requiredField),
    description: Yup.string().required(requiredField),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      shortName: '',
      description: '',
      active: true,
    },
    validationSchema,
    onSubmit: (values) => {
      // setLoading(true);
      // facilityManagementContext.facilityLevelRegistration(
      //   {
      //     name: values.name,
      //     shortName: values.shortName,
      //     description: values.description,
      //     active: true,
      //   },
      //   (status) => {
      //     setLoading(false);
      //     if (status === 201) {
      //       toggleDialogState('healthFacilityLevelRegistration', false);
      //       Swal.fire({
      //         icon: 'success',
      //         title: 'Facility Level Registered successfully',
      //         showConfirmButton: false,
      //         timer: 3000,
      //       });
      //     }
      //   }
      // );
    },
  });

  return (
    <Dialog open={open} maxWidth="md" fullWidth scroll="body">
      <Stack
        direction="column"
        alignItems="center"
        sx={{
          padding: '4rem',
        }}
        spacing={2}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            width: '100%',
            padding: '1rem 0.1rem',
          }}
        >
          <Typography fontSize="2rem" letterSpacing="0.3px" color="initial">
            Register Health Facility Level
          </Typography>

          <IconButton
            sx={{
              width: '28px',
              height: '28px',
            }}
            size="small"
            onClick={() => {
              toggleDialogState('healthFacilityLevelRegistration', false);
            }}
          >
            <FontAwesomeIcon icon={faXmark} fontSize="15px" />
          </IconButton>
        </Stack>
        <Typography
          fontStyle="italic"
          fontSize="1.4rem"
          textAlign="start"
          sx={{
            width: '100%',
          }}
          color="#D51A52"
        >
          * Mandatory Fields
        </Typography>

        <form
          onSubmit={formik.handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            width: '100%',
          }}
        >
          <Stack direction="row" spacing="2rem">
            <FormInput
              required
              name="name"
              id="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <FormInput
              required
              id="shortName"
              name="shortName"
              label="Short Name"
              value={formik.values.shortName}
              onChange={formik.handleChange}
              error={
                formik.touched.shortName && Boolean(formik.errors.shortName)
              }
              helperText={formik.touched.shortName && formik.errors.shortName}
            />
          </Stack>
          <Stack>
            <Typography fontSize="13px" color="black">
              Have IPD *
            </Typography>
            <Stack direction="row" spacing="1rem">
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      '& .MuiSvgIcon-root': {
                        fontSize: 18,
                      },
                    }}
                  />
                }
                label={
                  <Typography fontSize="13px" color="black">
                    Yes
                  </Typography>
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      '& .MuiSvgIcon-root': {
                        fontSize: 18,
                      },
                    }}
                  />
                }
                label={
                  <Typography fontSize="13px" color="black">
                    No
                  </Typography>
                }
              />
            </Stack>
          </Stack>
          <Stack direction="row" spacing="1rem">
            <FormTimePicker
              sx={{
                width: '30%',
              }}
              label="Opening Hours"
            />
            <FormTimePicker
              sx={{
                width: '30%',
              }}
              label="Closing Hours"
            />
          </Stack>
          <FormInput
            required
            id="shortName"
            name="shortName"
            label="Domain Name"
            value={formik.values.shortName}
            onChange={formik.handleChange}
            error={formik.touched.shortName && Boolean(formik.errors.shortName)}
            helperText={formik.touched.shortName && formik.errors.shortName}
          />
          <FormTextInput
            required
            name="description"
            id="description"
            label="Description"
            value={formik.values.moreInformation}
            onChange={formik.handleChange}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
          />
          <Stack
            direction="row"
            justifyContent="end"
            spacing={2}
            sx={{
              width: '100%',
            }}
          >
            <Button
              onClick={() =>
                toggleDialogState('healthFacilityLevelRegistration', false)
              }
              sx={{
                width: '20rem',
              }}
              disabled={loading}
              color="error"
              variant="outlined"
            >
              Cancel
            </Button>
            <Button
              // type="submit"
              onClick={() =>
                toggleDialogState('healthFacilityLevelSummary', true)
              }
              sx={{
                width: '20rem',
              }}
            >
              Register
            </Button>
          </Stack>
        </form>
      </Stack>
    </Dialog>
  );
}

export default HealthFacilityLevelRegistrationDialog;
