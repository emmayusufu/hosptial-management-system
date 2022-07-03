/* eslint-disable react/prop-types */
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InfoIcon from '@app/shared-components/info-icon/InfoIcon';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
  faScreenUsers,
  faGlobeSnow,
  faVials,
  faHospital,
  faMicroscope,
} from '@fortawesome/pro-solid-svg-icons';

function HealthFacilityAttachmentsDialog(props) {
  const { open, toggleDialogState } = props;
  return (
    <Dialog open={open} maxWidth="md" fullWidth scroll="body">
      <Stack
        direction="column"
        alignItems="center"
        sx={{
          padding: '2rem',
          width: '100%',
        }}
        spacing={2}
      >
        <Stack
          alignItems="center"
          justifyContent="end"
          direction="row"
          sx={{
            width: '100%',
          }}
        >
          <IconButton
            sx={{
              width: '28px',
              height: '28px',
            }}
            size="small"
            onClick={() => {
              toggleDialogState('healthFacilityAttachments', false);
            }}
          >
            <FontAwesomeIcon icon={faXmark} fontSize="15px" />
          </IconButton>
        </Stack>
        <InfoIcon />
        <Stack
          direction="column"
          sx={{
            width: '70%',
            textAlign: 'center',
          }}
        >
          <Typography fontSize="2.5rem" fontWeight={500} color="black">
            Cannot Delete
          </Typography>
          <Typography fontSize="1.5rem" color="gray">
            Name here cannot be deleted because it has various sectors attached
          </Typography>
        </Stack>
        <Divider
          sx={{
            width: '100%',
          }}
        />
        <Stack
          direction="column"
          sx={{
            width: '80%',
            textAlign: 'center',
          }}
        >
          <Typography fontSize="2rem" fontWeight={400} color="black">
            Facility Attachments
          </Typography>
          <Typography fontSize="1.5rem" color="gray">
            Facility attachments have to be transferred be deleting Namehere
            Health Facility
          </Typography>
        </Stack>
        <Stack
          sx={{
            width: '80%',
          }}
          spacing="2rem"
        >
          {' '}
          {[
            {
              color: '#782878',
              title: 'Staff',
              icon: faScreenUsers,
              count: 10000,
            },
            {
              color: '#00B998',
              title: 'Furniture',
              icon: faGlobeSnow,
              count: 300,
            },
            {
              color: '#FF9500',
              title: 'Equipment',
              icon: faVials,
              count: 1243,
            },
            {
              color: '#D51A52',
              title: 'Pharmacy',
              icon: faHospital,
              count: 5,
            },
            {
              color: '#7AB800',
              title: 'Lab',
              icon: faMicroscope,
              count: 3,
            },
          ].map(({ color, icon, title, count }, index) => {
            return (
              <Box
                key={index}
                sx={{
                  width: '100%',
                  height: '8rem',
                  backgroundColor: '#D9D1E040',
                  borderRadius: '10px',
                  borderLeft: `1.5rem solid ${color}`,
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  sx={{
                    padding: '1rem',
                    height: '100%',
                  }}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing="2rem"
                    sx={{
                      width: '70%',
                    }}
                  >
                    <FontAwesomeIcon
                      icon={icon}
                      color="#404040"
                      fontSize="1.8rem"
                    />
                    <Typography fontSize="1.4rem" color="#0F0BAB">
                      {title}
                    </Typography>
                    <Typography fontSize="1.3rem">{count}</Typography>
                  </Stack>

                  <Button
                    variant="outlined"
                    sx={{
                      backgroundColor: 'white',
                      width: '20%',
                      height: '4rem',
                    }}
                  >
                    Details
                  </Button>
                </Stack>
              </Box>
            );
          })}
        </Stack>
        <Button
          sx={{
            width: '30%',
          }}
        >
          Okay
        </Button>
      </Stack>
    </Dialog>
  );
}

export default HealthFacilityAttachmentsDialog;
