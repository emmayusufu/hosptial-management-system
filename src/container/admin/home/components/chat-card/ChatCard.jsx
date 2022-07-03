import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faListDots } from '@fortawesome/pro-solid-svg-icons';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import OnlineIndicator from '@app/shared-components/online-indicator/OnlineIndicator';

function DashboardChatCard() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Paper
      variant="outlined"
      sx={{
        height: '100%',
      }}
    >
      <Box
        sx={{
          padding: '1.5rem',
          height: '100%',
        }}
      >
        <Stack
          spacing={1.5}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            height: '100%',
          }}
        >
          <Stack
            sx={{
              width: '100%',
              padding: '2px 0px',
            }}
            direction="row"
            justifyContent="space-between"
          >
            <Typography
              textAlign="start"
              fontWeight={600}
              fontSize="1.8rem"
              width="100%"
            >
              Chats
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              sx={{
                flexShrink: 0,
                cursor: 'pointer',
              }}
              alignItems="center"
              onClick={() => navigate(`${location.pathname}/chat`)}
            >
              <FontAwesomeIcon
                icon={faListDots}
                color="#0621B5"
                fontSize="18px"
              />

              <Typography color="#0621B5" fontSize="14px">
                See All
              </Typography>
            </Stack>
          </Stack>
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            sx={{
              width: '80%',
            }}
          >
            <span style={{ color: 'GrayText', fontSize: '11.8px' }}>
              Online now
            </span>
            <span
              style={{
                color: '#0F0BAB',
                fontWeight: 'bolder',
                fontSize: '13px',
              }}
            >
              10
            </span>
          </Stack>
          <Stack
            justifyContent="space-between"
            direction="row"
            alignItems="center"
            sx={{
              width: '80%',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            {[...new Array(5)].map((_item, index) => {
              return (
                <OnlineIndicator
                  key={index}
                  overlap="circular"
                  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar
                    sx={{
                      fontSize: '12px',
                      backgroundColor: '#e5e0eb',
                      width: 50,
                      height: 50,
                      color: '#4B3A5A',
                    }}
                  >
                    <Typography
                      fontWeight={600}
                      fontSize="13px"
                      letterSpacing="0.5px"
                    >
                      KE
                    </Typography>
                  </Avatar>
                </OnlineIndicator>
              );
            })}
          </Stack>
          <Typography fontSize="13px" textAlign="start" width="100%">
            Messages
          </Typography>
          <Box
            sx={{
              height: '100% ',
              width: '100%',
              overFlow: 'hidden',
              // overflowY: 'overlay',
              // '::-webkit-scrollbar': {
              //   width: '7px',
              // },
              // '::-webkit-scrollbar-thumb': {
              //   background: 'rgba(109, 109, 109, 0.5)',
              //   borderRadius: '10rem',
              // },
            }}
          >
            {[...new Array(4)].map((_item, index) => {
              return (
                <Stack
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{
                    backgroundColor: '#d9d1e0bf',
                    borderRadius: '3px',
                    padding: '0.55rem 1rem',
                    paddingRight: '2rem',
                    width: '100%',
                  }}
                  key={index}
                  style={{ marginBottom: '1rem' }}
                >
                  <Stack spacing={2} direction="row" alignItems="center">
                    <OnlineIndicator
                      key={index}
                      overlap="circular"
                      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                      variant="dot"
                    >
                      <Avatar
                        sx={{
                          backgroundColor: 'white',
                          width: 50,
                          height: 50,
                          color: '#4B3A5A',
                        }}
                      >
                        <FontAwesomeIcon icon={faUser} fontSize="18px" />
                      </Avatar>
                    </OnlineIndicator>
                    <Typography fontSize="12px">Kimaswa Emmanuel</Typography>
                  </Stack>
                  <Typography
                    sx={{
                      backgroundColor: '#0f0bab',
                      color: 'white',
                      fontSize: '10px',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '20px',
                      height: '20px',
                      display: 'flex',
                      borderRadius: '50%',
                    }}
                    component="div"
                  >
                    3
                  </Typography>
                </Stack>
              );
            })}
          </Box>
        </Stack>
      </Box>
    </Paper>
  );
}

export default DashboardChatCard;
