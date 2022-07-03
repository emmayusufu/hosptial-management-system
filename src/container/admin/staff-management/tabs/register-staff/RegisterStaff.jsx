import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import AutoComplete from '@app/shared-components/autocomplete/Autocomplete';

function RegisterStaff() {
  return (
    <Stack
      direction="column"
      spacing={5}
      sx={{
        width: '100%',
        paddingBottom: '20px',
      }}
      alignItems="center"
    >
      <br />
      <AutoComplete
        options={[]}
        placeholder="Search for staff member"
        sx={{
          width: '50%',
        }}
      />
      <Stack direction="row" spacing={3}>
        {/* ====================================================== staff total */}
        {[
          {
            title: 'Staff Total',
            desc: 'Number of staff in the whole facility',
            num: '',
            color: '#FF9500',
          },
          {
            title: 'Available',
            desc: 'Number of staff on-call today',
            num: '500',
            color: '#C6126F',
          },
          {
            title: 'Female',
            desc: 'Number of staff in the whole facility',
            num: '650',
            color: '#6A17AB',
          },
          {
            title: 'Male',
            desc: 'Number of staff in the whole facility',
            num: '650',
            color: '#2B99BC',
          },
        ].map((item, index) => {
          const { title, desc, num, color } = item;
          return (
            <Box
              key={index}
              sx={{
                borderRadius: '5px',
                border: '1px solid #c9c9c9',
                width: '26rem',
                height: '22rem',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
              }}
            >
              <Stack
                direction="column"
                alignItems="center"
                justifyContent="center"
                spacing={2}
                sx={{
                  height: '100%',
                  borderBottom: `1rem solid ${color}`,
                }}
              >
                <Typography fontWeight={600} fontSize="1.65rem">
                  {title}
                </Typography>
                <Typography fontWeight={500} fontSize="1.25rem">
                  {desc}
                </Typography>
                <Typography fontWeight={600} fontSize="1.5rem">
                  {num}
                </Typography>
              </Stack>
            </Box>
          );
        })}
      </Stack>
    </Stack>
  );
}

export default RegisterStaff;
