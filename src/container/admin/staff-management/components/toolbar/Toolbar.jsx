import * as React from 'react';
import { faPlus } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

/**
 * This is the customized toolbar for the staff management data grid
 */
function Toolbar(props) {
  const { activeTabIndex, toggleTab, toggleDialogState } = props;

  return (
    <Box>
      <Stack
        direction="column"
        spacing={3}
        sx={{
          padding: '1rem 1rem',
          width: '100%',
        }}
      >
        <Typography fontSize="2.5rem">Staff List</Typography>
        {/* =========================================== first row */}
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            width: '100%',
          }}
        >
          <Tabs
            value={activeTabIndex}
            onChange={(e, index) => {
              toggleTab(index);
            }}
            aria-label="basic tabs"
          >
            {['Register Staff', 'Staff List'].map((tab, index) => {
              return (
                <Tab
                  key={index}
                  sx={{
                    textTransform: 'none',
                    fontSize: '1.4rem',
                  }}
                  label={tab}
                />
              );
            })}
          </Tabs>
          {activeTabIndex === 0 && (
            <Button
              sx={{
                flexShrink: 0,
                width: '18%',
                marginBottom: '0.5rem',
              }}
              onClick={() => toggleDialogState('staffMemberRegistration', true)}
            >
              <FontAwesomeIcon
                icon={faPlus}
                fontSize="15px"
                style={{
                  marginRight: '2rem',
                }}
              />
              Add Staff Member
            </Button>
          )}
        </Stack>
      </Stack>
    </Box>
  );
}

Toolbar.propTypes = {
  activeTabIndex: PropTypes.number.isRequired,
  toggleTab: PropTypes.func.isRequired,
  toggleDialogState: PropTypes.func.isRequired,
};

export default Toolbar;
