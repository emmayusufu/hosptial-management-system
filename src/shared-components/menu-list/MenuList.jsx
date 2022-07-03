import * as React from 'react';
import Menu from '@mui/material/Menu';
import { faUserPen, faKeySkeleton } from '@fortawesome/pro-solid-svg-icons';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as localStorageControl from '@app/utilities/localStorageControl';

function MenuList(props) {
  const { anchorEl, handleClose, open, toggleDialogState } = props;
  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 8,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem
        sx={{
          fontSize: '12px',
        }}
        onClick={() => {
          localStorageControl.setItem('profile', 'Change Username');
          toggleDialogState('answerSecurityQuestions', true);
        }}
      >
        <ListItemIcon>
          <FontAwesomeIcon icon={faUserPen} />
        </ListItemIcon>
        Change Username
      </MenuItem>
      <MenuItem
        onClick={() => {
          localStorageControl.setItem('profile', 'Change Password');
          toggleDialogState('answerSecurityQuestions', true);
        }}
        sx={{
          fontSize: '12px',
        }}
      >
        <ListItemIcon>
          <FontAwesomeIcon icon={faKeySkeleton} />
        </ListItemIcon>
        Change Password
      </MenuItem>
    </Menu>
  );
}

// MenuList.propTypes = {
//   handleClose: PropTypes.func.isRequired,
//   open: PropTypes.bool.isRequired,
//   anchorEl: PropTypes.element.isRequired,
// };

export default MenuList;
