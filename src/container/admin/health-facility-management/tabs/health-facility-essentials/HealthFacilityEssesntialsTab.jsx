import * as React from 'react';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserCrown,
  faSignalAlt,
  faShieldCheck,
} from '@fortawesome/pro-regular-svg-icons';
import FacilityOwner from './tabs/facility-owner/FacilityOwner';
import FacilityLevel from './tabs/facility-level/FacilityLevel';
import PolicyCategory from './tabs/policy-category/PolicyCategory';
import PolicyOption from './tabs/policy-option/PolicyOption';

function HealthFacilityEssentialsTab() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <Stack
      direction="row"
      spacing="2rem"
      sx={{
        width: '80%',
        margin: '0 auto',
      }}
    >
      {/* ===================================== settings tab */}
      <Box
        sx={{
          width: '30%',
        }}
      >
        <Stack
          sx={{
            border: '1px solid #CCCCCC',
            borderRadius: '2px',
          }}
        >
          <Typography
            sx={{
              padding: '1.5rem',
              fontSize: '1.8rem',
            }}
          >
            Settings
          </Typography>
          <Divider
            sx={{
              width: '100%',
            }}
          />
          <Stack
            sx={{
              padding: '1.5rem',
              paddingRight: 0.2,
            }}
            spacing="1rem"
          >
            {[
              { icon: faUserCrown, title: 'Facility Owner' },
              { icon: faSignalAlt, title: 'Facility Level' },
              { icon: faShieldCheck, title: 'Policy Category' },
              { icon: faShieldCheck, title: 'Policy Option' },
            ].map(({ title, icon }, index) => {
              return (
                <Stack
                  direction="row"
                  spacing="1rem"
                  alignItems="center"
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  sx={{
                    backgroundColor:
                      selectedIndex === index ? '#782878' : undefined,
                    color: selectedIndex === index ? 'white' : undefined,
                    padding: '1.2rem',
                    cursor: selectedIndex === index ? undefined : 'pointer',
                    borderTopLeftRadius: '4px',
                    borderBottomLeftRadius: '4px',
                    fontSize: '1.3rem',
                    ':hover': {
                      backgroundColor:
                        selectedIndex !== index ? '#78287815' : undefined,
                    },
                  }}
                >
                  <FontAwesomeIcon icon={icon} fontSize="1.4rem" />
                  <span>{title}</span>
                </Stack>
              );
            })}
          </Stack>
        </Stack>
      </Box>
      {/* =============================================== tabs */}
      <Box
        sx={{
          border: '1px solid #CCCCCC',
          borderRadius: '2px',
          width: '70%',
          padding: '2rem',
        }}
      >
        {selectedIndex === 0 ? (
          <FacilityOwner />
        ) : selectedIndex === 1 ? (
          <FacilityLevel />
        ) : selectedIndex === 2 ? (
          <PolicyCategory />
        ) : selectedIndex === 3 ? (
          <PolicyOption />
        ) : null}
      </Box>
    </Stack>
  );
}

export default HealthFacilityEssentialsTab;
