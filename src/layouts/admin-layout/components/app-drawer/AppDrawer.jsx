/* eslint-disable react/prop-types */
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/pro-regular-svg-icons';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import {
  topMenuItems,
  bottomMenuItems,
} from '../../../../utilities/menu-items';
import Divider from '@mui/material/Divider';
import { useNavigate, useLocation } from 'react-router-dom';
import { Typography } from '@mui/material';

function AppDrawer(props) {
  const { isDrawerOpen, closeDrawer } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const [subMenuOneOpen, setSubMenuOneOpen] = React.useState(null);

  const toggleSubMenuOne = (menuItem) => {
    if (subMenuOneOpen === menuItem) {
      setSubMenuOneOpen(null);
    } else {
      setSubMenuOneOpen(menuItem);
    }
  };

  const matchesPath = (path) => {
    return `/admin${path}` === location.pathname;
  };

  const navigateToPath = (path) => {
    closeDrawer();
    navigate(`/admin${path}`);
  };

  return (
    <Drawer anchor="left" open={isDrawerOpen} onClose={closeDrawer}>
      <Stack
        sx={{
          width: '50vw',
        }}
        direction="column"
      >
        {/* <Stack
          direction="row"
          sx={{ width: '90%', padding: '1rem 1rem', marginLeft: 'auto' }}
          justifyContent="space-between"
        >
          <img
            src={Logo}
            alt=""
            style={{
              width: '7rem',
              aspectRatio: 'auto',
            }}
          />
          <FontAwesomeIcon icon={faXmark} />
        </Stack> */}
        <List sx={{ width: '100%' }} component="nav">
          {topMenuItems.map((item, index) => {
            return (
              <div key={index}>
                <ListItem
                  button={!matchesPath(item.path)}
                  onClick={
                    item.subMenu
                      ? () => toggleSubMenuOne(item.label)
                      : () => navigateToPath(item.path)
                  }
                  sx={{
                    backgroundColor: matchesPath(item.path)
                      ? '#782878'
                      : undefined,

                    width: '90%',
                    padding: '1rem 0.8rem',
                    paddingRight: '1.5rem',
                    marginLeft: 'auto',
                    borderTopLeftRadius: '6px',
                    borderBottomLeftRadius: '6px',
                  }}
                >
                  <ListItemIcon>
                    <FontAwesomeIcon
                      icon={item.icon}
                      fontSize="18"
                      color={matchesPath(item.path) ? 'white' : undefined}
                    />
                  </ListItemIcon>

                  <Typography
                    color={matchesPath(item.path) ? 'white' : undefined}
                    sx={{
                      flexGrow: 1,
                    }}
                  >
                    {item.label}
                  </Typography>
                  <FontAwesomeIcon
                    icon={
                      subMenuOneOpen === item.label
                        ? faChevronUp
                        : faChevronDown
                    }
                  />
                </ListItem>
                {item.subMenu && (
                  <Collapse
                    in={subMenuOneOpen === item.label}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {item.subMenu.map((item2, index2) => {
                        return (
                          <ListItem
                            button={!matchesPath(item2.path)}
                            onClick={
                              item2.subMenu
                                ? () => toggleSubMenuOne(item2.label)
                                : () => navigateToPath(item2.path)
                            }
                            sx={{
                              backgroundColor: matchesPath(item2.path)
                                ? '#782878'
                                : undefined,

                              width: '85%',
                              padding: '1rem 0.8rem',
                              marginLeft: 'auto',
                              borderTopLeftRadius: '6px',
                              borderBottomLeftRadius: '6px',
                            }}
                            key={index2}
                          >
                            <ListItemText inset primary={item2.label} />
                          </ListItem>
                        );
                      })}
                    </List>
                  </Collapse>
                )}
              </div>
            );
          })}
          <Divider
            sx={{
              margin: '1rem 0rem',
            }}
          />
          {/* =============================== Bottom menu item start from here */}
          {bottomMenuItems.map((item, index) => {
            return (
              <ListItem
                button={!matchesPath(item.path)}
                key={index}
                onClick={() => navigateToPath(item.path)}
                sx={{
                  backgroundColor: matchesPath(item.path)
                    ? '#782878'
                    : undefined,
                  width: '90%',
                  padding: '1rem 0.8rem',
                  marginLeft: 'auto',
                  borderTopLeftRadius: '6px',
                  borderBottomLeftRadius: '6px',
                }}
              >
                <ListItemIcon>
                  <FontAwesomeIcon
                    icon={item.icon}
                    fontSize="18"
                    color={matchesPath(item.path) ? 'white' : undefined}
                  />
                </ListItemIcon>

                <ListItemText
                  style={{
                    color: matchesPath(item.path) ? 'white' : undefined,
                  }}
                >
                  {item.label}
                </ListItemText>
              </ListItem>
            );
          })}
          {/* <ListItemButton>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
         */}
        </List>
      </Stack>
    </Drawer>
  );
}

export default AppDrawer;
