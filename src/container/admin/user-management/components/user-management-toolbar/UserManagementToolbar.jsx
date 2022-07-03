/* eslint-disable react/jsx-boolean-value */
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
import { Badge } from '@mui/material';

/**
 * This is the customized toolbar for the health facility management data grid
 */
function UserManagementToolbar(props) {
  const { toggleDialogState, activeTabIndex, setActiveTabIndex } = props;

  return (
    <Box>
      <Stack
        direction="column"
        spacing={3}
        sx={{
          width: '100%',
        }}
      >
        <Typography fontWeight="medium" fontSize="2.5rem">
          User Management
        </Typography>
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
              setActiveTabIndex(index);
            }}
            aria-label="basic tabs"
          >
            {[
              'Requests To Use System',
              'Approved Requests',
              'Confirm Approved Requests',
              'Requests',
              'Staff List',
            ].map((tab, index) => {
              return (
                <Tab
                  key={index}
                  sx={{
                    textTransform: 'none',
                    fontSize: '1.4rem',
                  }}
                  label={
                    index === 2 ? (
                      <Badge
                        sx={{
                          '& .MuiBadge-badge': {
                            right: -5,
                            top: 0,
                            fontSize: '1.4rem',
                          },
                        }}
                        badgeContent={
                          <Typography color="inherit" fontSize="1.3rem">
                            9
                          </Typography>
                        }
                        color="error"
                      >
                        <Typography color="black">{tab}</Typography>
                      </Badge>
                    ) : (
                      <Typography variant="body1" color="initial">
                        {tab}
                      </Typography>
                    )
                  }
                />
              );
            })}
          </Tabs>
        </Stack>
      </Stack>
    </Box>
  );
}

UserManagementToolbar.propTypes = {
  toggleDialogState: PropTypes.func.isRequired,
  activeTabIndex: PropTypes.number.isRequired,
  setActiveTabIndex: PropTypes.func.isRequired,
};

export default UserManagementToolbar;
