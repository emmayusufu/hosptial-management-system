/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';
import './styles/AdminLayout.css';
import { Outlet, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faBell,
  faPowerOff,
  faUserGear,
  faBars,
  faQuestion,
} from '@fortawesome/pro-regular-svg-icons';
import { faEllipsisVertical } from '@fortawesome/pro-solid-svg-icons';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import SideMenu from './components/side-menu/SideMenu';
import MenuList from '../../shared-components/menu-list/MenuList';
import Header from './components/header/Header';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Fab from '@mui/material/Fab';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import AppDrawer from './components/app-drawer/AppDrawer';
import * as localStorageControl from '@app/utilities/localStorageControl';
import { useAuthenticationContext } from '@app/context-providers/authentication-context-provider/AuthenticationContextProvider';
import ChangePasswordDialog from './components/dialogs/change-password/ChangePasswordDialog';
import AnswerSecurityQuestionsDialog from './components/dialogs/answer-security-questions-dialog/AnswerSecurityQuestionsDialog';
import ChangeUsernameDialog from './components/dialogs/change-username-dialog/ChangeUsernameDialog';
import Autocomplete from '@app/shared-components/autocomplete/Autocomplete';
import SuccessfulLoginAlert from './components/alerts/SuccessfulLoginAlert';

function AdminLayout() {
  const [isSideMenuStretched, setIsSideMenuStretched] = React.useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const [openDialog, setOpenDialog] = React.useState({
    changeUsername: false,
    changePassword: false,
    answerSecurityQuestions: false,
    sessionExpired: false,
  });

  const toggleDialogState = (key, value) => {
    setOpenDialog({ ...openDialog, [key]: value });
  };

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const toggleMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const toggleStretch = () => {
    setIsSideMenuStretched(() => !isSideMenuStretched);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();
  const authContext = useAuthenticationContext();

  const [successAlertVisible, setSuccessAlertVisible] = React.useState(false);

  React.useLayoutEffect(() => {
    if (localStorageControl.getItem('initialLogin')) {
      setTimeout(() => {
        setSuccessAlertVisible(true);
      }, 200);
      setTimeout(() => {
        setSuccessAlertVisible(false);
        localStorageControl.removeItem('initialLogin');
      }, 2500);
    }
  }, []);

  return (
    <div className="container">
      {/* const {(isStretched, isSubMenuOpen, toggleMenu)} = props; */}
      <SideMenu
        isStretched={isSideMenuStretched}
        isSubMenuOpen={isSubMenuOpen}
        toggleMenu={toggleMenu}
      />
      {/* ========================================================================= */}
      <main>
        <AppDrawer isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer} />
        <AppBar
          position="static"
          elevation={0}
          color="inherit"
          sx={{
            height: '10rem',
          }}
        >
          <Toolbar
            sx={{
              height: '100%',
            }}
          >
            <button
              type="button"
              onClick={matches ? openDrawer : toggleStretch}
            >
              <FontAwesomeIcon
                icon={faBars}
                fontSize="22"
                style={{ marginRight: '2rem' }}
              />
            </button>

            <Typography
              fontWeight={600}
              color="#4B3A5A"
              sx={{
                width: { lg: 'auto', xs: '100%' },
              }}
              fontSize="1.8rem"
            >
              IICS Technologies
            </Typography>
            <Box
              sx={{
                width: '40rem',
                margin: '0rem 2rem',
                display: {
                  xs: 'none',
                  lg: 'block',
                },
              }}
            >
              <Autocomplete placeholder="Facility Unit" options={[]} />
            </Box>
            <div style={{ flexGrow: 1 }} />
            <Stack
              flexDirection="column"
              justifyContent="center"
              sx={{
                display: {
                  xs: 'flex',
                  lg: 'none',
                },
                height: '100%',
              }}
            >
              <FontAwesomeIcon icon={faEllipsisVertical} fontSize="20px" />
            </Stack>
            <Stack
              direction="row"
              spacing={5}
              sx={{
                display: {
                  xs: 'none',
                  sm: 'none',
                  md: 'flex',
                },
              }}
            >
              <Tooltip title="Help Center">
                <Fab
                  sx={{
                    backgroundColor: '#0F0BAB',
                    ':hover': {
                      backgroundColor: '#0d0a8a',
                    },
                  }}
                  size="medium"
                >
                  <FontAwesomeIcon
                    icon={faQuestion}
                    fontWeight={900}
                    fontSize="17"
                    color="white"
                  />
                </Fab>
              </Tooltip>
              <Tooltip title="Notifications">
                <button type="button">
                  <FontAwesomeIcon
                    icon={faBell}
                    fontSize="17"
                    color="#262626"
                  />
                </button>
              </Tooltip>

              <Tooltip title="Messages">
                <button type="button">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    fontSize="17"
                    color="#262626"
                  />
                </button>
              </Tooltip>

              <Tooltip title="Profile">
                <button type="button" onClick={handleClick}>
                  <FontAwesomeIcon
                    icon={faUserGear}
                    fontSize="17"
                    color="#262626"
                  />
                </button>
              </Tooltip>
              <MenuList
                anchorEl={anchorEl}
                open={open}
                handleClose={handleClose}
                toggleDialogState={toggleDialogState}
              />
              <Tooltip title="Logout">
                <button
                  type="button"
                  onClick={() => {
                    authContext.logoutHandler(() => {
                      navigate('/');
                    });
                  }}
                >
                  <FontAwesomeIcon
                    icon={faPowerOff}
                    fontSize="17"
                    color="#262626"
                  />
                </button>
              </Tooltip>
            </Stack>
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            padding: '0rem 0.8rem',
            position: 'relative',
            paddingBottom: '1rem',
            height: 'calc(100vh - 10rem)',
            overflowY: 'scroll',
            '::-webkit-scrollbar': {
              width: '7px',
            },
            '::-webkit-scrollbar-thumb': {
              background: 'rgba(109, 109, 109, 0.6)',
              borderRadius: '10rem',
            },
          }}
        >
          <SuccessfulLoginAlert
            visible={successAlertVisible}
            setSuccessAlertVisible={setSuccessAlertVisible}
          />

          <div
            style={{
              height: '1rem',
            }}
          />
          <Header />
          <div>
            <Outlet />
            <ChangePasswordDialog
              open={openDialog.changePassword}
              toggleDialogState={toggleDialogState}
            />
            <AnswerSecurityQuestionsDialog
              title={title}
              open={openDialog.answerSecurityQuestions}
              toggleDialogState={toggleDialogState}
            />
            <ChangeUsernameDialog
              open={openDialog.changeUsername}
              toggleDialogState={toggleDialogState}
            />
          </div>
        </Box>
      </main>
    </div>
  );
}

export default AdminLayout;
