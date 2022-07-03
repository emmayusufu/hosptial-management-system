import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/pro-regular-svg-icons';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import HelpIcon from '../../../static/svg/help-icon.svg';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function HelpCenter() {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChanged = (event, newValue) => {
    setTabValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <Paper
      variant="outlined"
      sx={{
        borderRadius: '2px',
        padding: '1rem',
      }}
    >
      <Stack
        direction="column"
        spacing={3}
        alignItems="center"
        sx={{
          width: '100%',
        }}
      >
        <Stack
          sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}
          direction="row"
          justifyContent="space-between"
        >
          <Tabs
            value={tabValue}
            onChange={handleTabChanged}
            aria-label="basic tabs"
          >
            {['For Users', 'For Administrators', 'New In System'].map(
              (tab, index) => {
                return (
                  <Tab
                    key={index}
                    sx={{
                      textTransform: 'none',
                    }}
                    label={tab}
                    {...a11yProps(index)}
                  />
                );
              }
            )}
          </Tabs>
          <Button
            sx={{
              width: '15rem',
            }}
          >
            Ask Questions
          </Button>
        </Stack>
        {/* <Stack
          direction="row"
          alignItems="end"
          spacing={2}
          sx={{
            height: '47px',
            borderBottom: '1px solid #75187C',
            paddingBottom: '5px',
            width: '100%',
          }}
        >
          <Typography>For Users</Typography>
          <Typography>For Administrators</Typography>
          <Typography>New In System</Typography>
          <div
            style={{
              flexGrow: 1,
            }}
          />
          <Button
            sx={{
              width: '15rem',
            }}
          >
            Ask Questions
          </Button>
        </Stack> */}
        <Stack
          sx={{
            width: '70%',
          }}
          direction="column"
          alignItems="center"
          spacing={5}
        >
          <Typography fontWeight={600}>How Can We Help You ?</Typography>
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{
              border: '1px solid rgb(92,92,92,0.4)',
              height: '45px',
              width: '50%',
              borderRadius: '1px',
              padding: '0px 0.5rem',
            }}
          >
            <input
              placeholder="Write a question or problem"
              style={{
                width: '100%',
                height: '100%',
                outline: 'none',
                fontSize: '11px',
                backgroundColor: 'transparent',
              }}
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} fontSize="15px" />
          </Stack>
          <img src={HelpIcon} alt="" />
        </Stack>
      </Stack>
    </Paper>
  );
}

export default HelpCenter;
