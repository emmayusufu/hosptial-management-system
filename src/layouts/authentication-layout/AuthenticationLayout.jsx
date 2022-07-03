/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Uganda from '@app/static/svg/uganda.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/pro-solid-svg-icons';
import { faXmarkCircle } from '@fortawesome/pro-regular-svg-icons';
import { useLocation, Navigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Logo from '@app/static/img/logo.webp';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useAuthenticationContext } from '@app/context-providers/authentication-context-provider/AuthenticationContextProvider';
import * as localStorageControl from '@app/utilities/localStorageControl';

// eslint-disable-next-line react/prop-types
function AuthenticationLayout({ children, svg }) {
  const location = useLocation();
  const authContext = useAuthenticationContext();

  const user = localStorageControl.getItem('user');
  const screenLock = localStorageControl.getItem('screenLock');

  // if (user) {
  //   return <Navigate to="/admin/home" state={{ from: location }} replace />;
  // }

  return (
    <Box
      sx={{
        backgroundColor: '#782878',
        height: '100vh',
        width: '100vw',
        position: 'fixed',
      }}
    >
      {/* ======================================================================== inner row */}
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent={{
          lg: 'space-between',
          md: 'center',
        }}
        alignItems="center"
        sx={{
          width: { lg: '85%', sm: '95%', xs: '95%' },
          height: { lg: '85%', md: '80%', xs: '70%' },
          margin: '0 auto',
          marginTop: {
            xs: '5%',
            lg: '2%',
          },
        }}
      >
        {/* ======================================== This is column one */}
        <Stack
          direction="column"
          justifyContent="space-between"
          sx={{
            width: {
              lg: '40%',
            },
            height: '80%',
            display: {
              xs: 'none',
              sm: 'none',
              md: 'flex',
              lg: 'flex',
            },
          }}
        >
          <Box
            sx={{
              width: '12em',
              border: '1px solid white',
              padding: '1px',
              borderRadius: '50%',
            }}
          >
            <img
              src={Logo}
              alt="logo"
              style={{
                backgroundColor: 'white',
                borderRadius: '50%',
              }}
            />
          </Box>

          <Stack direction="column" spacing={1}>
            <Typography
              color="white"
              fontSize="3rem"
              fontWeight={600}
              letterSpacing="1px"
            >
              Integrated Health Management Information System.
            </Typography>
            <Typography
              component="span"
              fontStyle="italic"
              fontSize="2rem"
              color="#FF9500"
            >
              Together We Save Lives!
            </Typography>
          </Stack>
        </Stack>
        {/* ======================================== This is column two having the form */}
        <Paper
          sx={{
            width: {
              lg: '35%',
              md: '50%',
              sm: '70%',
              xs: '100%',
            },
            overflow: 'hidden',
            position: 'relative',
            height: '95%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
          variant="outlined"
        >
          {/* ================================================ alert */}
          {!screenLock && (
            <Paper
              sx={{
                position: 'absolute',
                width: '70%',
                left: '50%',
                top: '2rem',
                transform: 'translateX(-50%)',
                boxShadow: '0px 7px 20px rgba(62, 19, 77, 0.47)',
                backgroundColor: '#FDEFEF',
                display:
                  authContext?.loginFailedAttempts === 3 ? 'flex' : 'none',
                padding: '3rem',
              }}
            >
              <Stack
                direction="row"
                spacing={3}
                alignItems="center"
                justifyContent="center"
                sx={{
                  width: '100%',
                }}
              >
                <FontAwesomeIcon
                  icon={faXmarkCircle}
                  color="#CE0610"
                  fontSize="2.5rem"
                />
                <Typography
                  fontSize="1.7rem"
                  color="#CE0610"
                  letterSpacing="0.6px"
                  fontWeight={600}
                >
                  Access Blocked !
                </Typography>
              </Stack>
            </Paper>
          )}

          <Stack
            direction="column"
            spacing={2}
            alignItems="center"
            justifyContent="center"
            sx={{
              width: '100%',
              padding: '2rem 0',
            }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <img src={Uganda} alt="logo" />
              <Typography
                component="span"
                fontWeight="bolder"
                fontSize="1.8rem"
                letterSpacing=".8px"
              >
                GOVERNMENT OF UGANDA
              </Typography>
            </Stack>

            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{
                width: '100%',
              }}
            >
              <Divider
                sx={{
                  width: '100%',
                  '&.MuiDivider-root': {
                    '&::before': {
                      borderTop: '1.5px solid purple',
                    },
                    '&::after': {
                      borderTop: '1.5px solid purple',
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    minHeight: '10rem',
                    minWidth: '10rem',
                    border: '1px solid purple',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    sx={{
                      minHeight: '8rem',
                      minWidth: '8rem',
                      border: '1px solid purple',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {location.pathname === '/' ? (
                      <FontAwesomeIcon
                        icon={faUser}
                        fontSize="3.5rem"
                        color="purple"
                      />
                    ) : (
                      svg && (
                        <img
                          src={svg}
                          alt=""
                          style={{
                            width: '5rem',
                            height: '5rem',
                          }}
                        />
                      )
                    )}
                  </Box>
                </Box>
              </Divider>
            </Stack>
            <Stack
              direction="column"
              alignItems="center"
              spacing={2}
              sx={{
                width: '84%',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              {children}
            </Stack>
          </Stack>
        </Paper>
      </Stack>
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          width: '100%',
        }}
      >
        {/* ==================================================================== copy right */}
        <Stack direction="column">
          <Box
            sx={{
              padding: '.1rem 0',
              width: '100%',
              backgroundColor: 'white',
              textAlign: 'center',
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              spacing="1rem"
              justifyContent="center"
            >
              <span
                style={{
                  fontSize: '1.7rem',
                  color: 'purple',
                }}
              >
                &copy;
              </span>{' '}
              <Typography
                fontSize="1.15rem"
                letterSpacing=".4px"
                color="#782878"
              >
                Copyright {new Date().getFullYear()} IICS TECHNOLOGIES.
              </Typography>
            </Stack>
          </Box>
          <Box
            sx={{
              height: '.65rem',
              width: '100%',
              backgroundColor: 'black',
            }}
          />
          <Box
            sx={{
              height: '.65rem',
              width: '100%',
              backgroundColor: 'yellow',
            }}
          />
          <Box
            sx={{
              height: '.65rem',
              width: '100%',
              backgroundColor: 'red',
            }}
          />
        </Stack>
      </Box>
    </Box>
  );
}

export default AuthenticationLayout;
