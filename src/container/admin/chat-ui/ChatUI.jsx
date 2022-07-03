import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ScrollBar from 'react-custom-scrollbars-2';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faEllipsisVertical,
  faPaperclip,
  faPaperPlane,
} from '@fortawesome/pro-regular-svg-icons';
import { faUser } from '@fortawesome/pro-solid-svg-icons';

import OnlineIndicator from '@app/shared-components/online-indicator/OnlineIndicator';
import Button from '@mui/material/Button';

function MessageLeft(index) {
  return (
    <Stack
      key={index}
      direction="row"
      spacing={2}
      alignItems="end"
      sx={{
        marginBottom: '1rem',
        padding: '0 2rem',
        height: '5.2rem',
      }}
    >
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{
          height: '100%',
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{
            height: '2.6rem',
            width: '2.5rem',
            backgroundColor: '#782878',
          }}
        />
      </Stack>
      <Stack direction="column" sx={{ width: '100%' }} gap={1}>
        <Typography fontSize="10px">12:00 pm</Typography>
        <Paper
          elevation={0.1}
          sx={{
            padding: '10px',
            borderRadius: '20px',
            fontSize: '11px',
            maxWidth: '20%',
            borderTopLeftRadius: '0px',
            backgroundColor: '#E5E0EB',
          }}
        >
          Helo there
        </Paper>
      </Stack>
    </Stack>
  );
}

function MessageRight(index) {
  return (
    <Stack key={index} direction="row" justifyContent="flex-end">
      <Stack
        direction="row"
        spacing={2}
        alignItems="end"
        sx={{
          marginBottom: '1rem',
          padding: '0 2rem',
          height: '5.2rem',
        }}
      >
        <Stack direction="column" sx={{ width: '100%' }} gap={1}>
          <Typography fontSize="10px" textAlign="right">
            12:00 pm
          </Typography>
          <Paper
            elevation={0}
            sx={{
              padding: '10px',
              borderRadius: '20px',
              fontSize: '11px',
              borderTopRightRadius: '0px',
              backgroundColor: '#782878',
              color: 'White',
            }}
          >
            How are you doing
          </Paper>
        </Stack>
      </Stack>
    </Stack>
  );
}

function ChatUI() {
  return (
    <Grid container spacing={0.1} sx={{ height: '40rem' }}>
      {/* ======================================== This is column one */}
      <Grid item sm={3.0} sx={{ height: '100%' }}>
        <Paper sx={{ borderRadius: '2px', height: '100%' }} variant="outlined">
          <Stack
            spacing={2}
            flexDirection="column"
            alignItems="center"
            sx={{
              height: '100%',
              padding: '0.5rem',
            }}
          >
            <Typography
              textAlign="start"
              width="100%"
              fontWeight={600}
              fontSize="16px"
            >
              Chats
            </Typography>
            <Stack
              flexDirection="row"
              justifyContent="space-between"
              sx={{
                width: '90%',
              }}
            >
              <span style={{ color: 'GrayText', fontSize: '11px' }}>
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
                width: '90%',
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
                        fontSize: '8px',
                        backgroundColor: '#e5e0eb',
                        width: 40,
                        height: 40,
                        color: '#4B3A5A',
                      }}
                    >
                      <Typography
                        fontWeight={600}
                        fontSize="12px"
                        letterSpacing="0.5px"
                      >
                        R
                      </Typography>
                    </Avatar>
                  </OnlineIndicator>
                );
              })}
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              sx={{
                border: '1px solid rgb(92,92,92,0.4)',
                height: '45px',
                width: '90%',
                borderRadius: '1px',
                padding: '0px 0.5rem',
              }}
            >
              <input
                placeholder="Search"
                style={{
                  width: '100%',
                  height: '100%',
                  outline: 'none',
                  fontSize: '11px',
                  backgroundColor: 'transparent',
                }}
              />
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Stack>
            <Divider
              sx={{
                width: '100%',
              }}
            />
            <Button
              variant="outlined"
              sx={{
                width: '90%',
                height: '40px',
                fontSize: '10.5px',
              }}
            >
              Create Group
            </Button>
            {/* ================================================ list of messages */}
            <Stack
              direction="column"
              spacing={1}
              sx={{
                width: '100%',
              }}
            >
              <Typography fontSize="11px" textAlign="start" width="100%">
                Messages
              </Typography>
              {[...new Array(3)].map((_item, index) => {
                return (
                  <Stack
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{
                      backgroundColor: '#d9d1e0bf',
                      borderRadius: '3px',
                      padding: '1rem',
                      paddingRight: '2rem',
                      width: '100%',
                    }}
                    key={index}
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
                            width: 40,
                            height: 40,
                            color: '#4B3A5A',
                          }}
                        >
                          <FontAwesomeIcon icon={faUser} fontSize="15px" />
                        </Avatar>
                      </OnlineIndicator>
                      <Typography fontSize="11px">Kimaswa Emmanuel</Typography>
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
            </Stack>
          </Stack>
        </Paper>
      </Grid>
      {/* =========================================================== This is column two */}
      <Grid item sm={6}>
        <Paper
          sx={{
            borderRadius: '2px',
            height: '100%',
            position: 'relative',
          }}
          variant="outlined"
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              height: '10%',
              paddingRight: '1.5rem',
              paddingLeft: '1rem',
              backgroundColor: '#782878',
            }}
          >
            <Stack direction="row" spacing={2}>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{
                  height: '50px',
                  width: '50px',
                }}
              />
              <Stack direction="column" justifyContent="center">
                <Typography fontSize="12px" color="white">
                  Kimaswa Emmanuel
                </Typography>
                <Typography
                  fontSize="10px"
                  color="#ededed"
                  letterSpacing="0.2px"
                >
                  Last seen today at 10:40 pm
                </Typography>
              </Stack>
            </Stack>
            <button type="button">
              <FontAwesomeIcon
                icon={faEllipsisVertical}
                fontSize="18px"
                color="white"
              />
            </button>
          </Stack>
          <Divider variant="fullWidth" />
          {/* =========================================== chat messages */}
          <Box
            sx={{
              height: '77%',
            }}
          >
            <ScrollBar>
              {[...new Array(100)].map((chatMessage, chatMessageIndex) => {
                const isOdd = chatMessageIndex % 3 === 0;
                return (
                  <div key={chatMessageIndex}>
                    {isOdd ? (
                      <MessageRight index={chatMessageIndex} />
                    ) : (
                      <MessageLeft index={chatMessageIndex} />
                    )}
                  </div>
                );
              })}
            </ScrollBar>
          </Box>
          {/* ========================================================== message input container */}
          <Box
            sx={{
              position: 'absolute',
              width: '100%',
              height: '13%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Stack
              spacing={2.5}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                height: '80%',
                width: '90%',
                padding: '1rem',
                border: '1px solid rgb(92, 92, 92, 0.5)',
                borderRadius: '2px',
              }}
            >
              <Avatar
                size="medium"
                sx={{
                  flexShrink: 0,
                  backgroundColor: '#0F0BAB',
                }}
              >
                R
              </Avatar>
              <input
                placeholder="Your message"
                style={{
                  width: '100%',
                  height: '100%',
                  outline: 'none',
                  backgroundColor: 'transparent',
                  paddingLeft: '1rem',
                }}
              />
              <FontAwesomeIcon
                icon={faPaperclip}
                fontSize="13px"
                cursor="pointer"
              />
              <FontAwesomeIcon
                icon={faPaperPlane}
                fontSize="13px"
                cursor="pointer"
              />
            </Stack>
          </Box>
        </Paper>
      </Grid>
      {/* ================================================= Third column */}
      <Grid item sm={3}>
        <Paper
          sx={{
            borderRadius: '2px',
            height: '100%',
            position: 'relative',
          }}
          variant="outlined"
        >
          help
        </Paper>
      </Grid>
    </Grid>
  );
}

export default ChatUI;
