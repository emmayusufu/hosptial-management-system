/* eslint-disable react/jsx-closing-bracket-location */
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

import { topMenuItems, bottomMenuItems } from '@app/utilities/menu-items';
import Logo from '@app/static/img/logo.webp';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SideMenuItem from './components/SideMenuItem';
import PropTypes from 'prop-types';
import { getItem } from '@app/utilities/localStorageControl';

function SideMenu(props) {
  const { isStretched } = props;
  const [scrollPosition, setScrollPosition] = React.useState(0);

  return (
    <Paper
      sx={{
        borderRadius: '0rem',
        width: isStretched ? '19%' : '7%',
        transition: 'width 250ms ease-in-out',
        height: '100%',
        display: {
          xs: 'none',
          md: 'flex',
        },
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      {/* ===================================== logo container */}
      <Box
        sx={{
          transition: 'height 250ms ease-in-out',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          height: isStretched ? '20rem' : '10rem',
        }}
      >
        {/* ===================================== logo */}
        <img
          src={Logo}
          alt=""
          style={{
            width: isStretched ? '15rem' : '7rem',
            aspectRatio: 'auto',
            transition: 'all 250ms ease-in-out',
          }}
        />
      </Box>
      {/* ===================================== user container */}
      <Box
        sx={{
          height: '80px',
          flexShrink: 0,
          backgroundColor: '#782878',
          border: '1px solid #ac8dac',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* ===================================== row containing user details */}
        <Stack
          direction="row"
          alignItems="center"
          spacing={1.5}
          sx={{
            width: isStretched ? '90%' : undefined,
            marginLeft: isStretched ? 'auto' : undefined,
          }}
        >
          {/* ===================================== user avatar */}
          <Avatar
            sx={{
              height: '50px',
              width: '50px',
              color: 'white',
              border: '1px solid #423e42',
              backgroundColor: '#2b99bc',
              fontWeight: '500',
              fontSize: '14px',
            }}
          >
            CT
          </Avatar>
          {/* ===================================== user details */}
          <Stack
            direction="column"
            spacing="1px"
            sx={{
              display: isStretched ? 'flex' : 'none',
            }}
          >
            {/* ===================================== user name */}
            <Typography color="white" letterSpacing="0.25px" fontSize="12px">
              Kimaswa Emmanuel
            </Typography>
            {/* ===================================== user role */}
            <Typography fontSize="10px" letterSpacing="0.25px" color="#d6d6d6">
              Managing Director
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <Box
        sx={{
          overflowX: 'hidden',
          overflowY: 'overlay',
          '::-webkit-scrollbar': {
            width: '7px',
          },
          '::-webkit-scrollbar-thumb': {
            background: 'rgba(109, 109, 109, 0.4)',
            borderRadius: '10rem',
          },
        }}
        onScroll={(event) => {
          setScrollPosition(event.target.scrollTop);
        }}
      >
        <div style={{ height: '2rem', flexShrink: 0 }} />
        <Stack direction="column" spacing={2}>
          {/* ===================================== top menu items list */}
          {topMenuItems.map((menuItem, menuItemIndex) => {
            return (
              <SideMenuItem
                scrollPosition={scrollPosition}
                key={menuItemIndex}
                menuItem={menuItem}
                isStretched={isStretched}
              />
            );
          })}
        </Stack>
        <Divider
          sx={{
            margin: '2rem 0rem',
          }}
        />
        {/* =============================== Divider */}
        <Stack direction="column" spacing={2}>
          {bottomMenuItems.map((menuItem, menuItemIndex) => {
            return (
              <SideMenuItem
                key={menuItemIndex}
                menuItem={menuItem}
                isStretched={isStretched}
              />
            );
          })}
        </Stack>
      </Box>
    </Paper>
  );
}

SideMenu.propTypes = {
  isStretched: PropTypes.bool.isRequired,
};

export default SideMenu;
