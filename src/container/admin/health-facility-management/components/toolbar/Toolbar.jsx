import * as React from 'react';
import { faPlus } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Badge } from '@mui/material';
import { createConfirmation } from 'react-confirm';
import DeleteHealthFacilityPrompt from '@app/container/admin/health-facility-management/components/dialogs/delete-health-facility-prompt/DeleteHealthFacilityPrompt';
import jConfirm from 'jquery-confirm';

/**
 * This is the customized toolbar for the health facility management data grid
 */
function Toolbar(props) {
  const { toggleDialogState, activeTabIndex, setActiveTabIndex } = props;

  const confirm = createConfirmation(DeleteHealthFacilityPrompt);

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
          Health Facility Register
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
            {['Facilities', 'Facility Essentials', 'Facility Depository'].map(
              (tab, index) => {
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
              }
            )}
          </Tabs>
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: '15%',
              marginBottom: '0.5rem',
            }}
            onClick={() => {
              toggleDialogState('healthFacilityRegistration', true);
            }}
          >
            <FontAwesomeIcon
              icon={faPlus}
              fontSize="14px"
              style={{
                marginRight: '1rem',
              }}
            />
            Add Health Facility
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Toolbar;
