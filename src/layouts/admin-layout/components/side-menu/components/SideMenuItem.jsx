/* eslint-disable react/prop-types */
import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';

import Box from '@mui/material/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/pro-regular-svg-icons';
import ListItemButton from '@mui/material/ListItemButton';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

function SideMenuItem(props) {
  const navigate = useNavigate();

  const location = useLocation();

  const { menuItem, isStretched, scrollPosition } = props;

  // ===================================== menu Item
  const [hovered, setHovered] = React.useState(false);

  const [flyoutMenuHovered, setFlyoutMenuHovered] = React.useState(false);

  const ref = React.useRef();

  const [topOffSet, setTopOffSet] = React.useState(0);

  // ===================================== sub menu item
  const subMenuItemRef = React.useRef();

  const subMenuTopOffSet = React.useRef(0);

  const [subMenuItemHovered, setSubMenuItemHovered] = React.useState('');

  const [subMenuFlyoutMenuHovered, setSubMenuFlyoutMenuHovered] =
    React.useState(false);

  const menuItemMatchesRoutePath = (path) => location.pathname.includes(path);

  const showFlyoutMenu = () => {
    const num = ref.current.offsetTop - scrollPosition;
    setTopOffSet(num);
    setHovered(true);
  };

  const hideFlyoutMenu = () => {
    if (!flyoutMenuHovered) {
      setTimeout(() => {
        setHovered(false);
      }, 100);
    }
  };

  const getChildren = (array) => {
    return array.filter((e) => e.path.includes(subMenuItemHovered));
  };

  const [pathList, setPathList] = React.useState([]);

  const handleClicked = (item) => {
    if (item.children) {
      if (pathList.includes(item.path)) {
        const list = [...pathList];
        list.pop();
        setPathList(list);
      } else {
        const list = [...pathList];
        list.push(item.path);
        setPathList(list);
      }
    } else {
      navigate(item.path);
      setPathList([]);
    }
  };

  // =================================================== components
  const Row = styled(Box)(() => ({
    display: 'flex',
    flexDirection: isStretched ? 'row' : 'column',
    gap: isStretched ? undefined : '2px',
    alignItems: 'center',
    cursor: 'pointer',
    borderTopLeftRadius: '0.35rem',
    borderBottomLeftRadius: '0.35rem',
    width: '92%',
    letterSpacing: '0.3px',
    marginLeft: 'auto',
    padding: '14px',
    ':hover': {
      backgroundColor: '#782878',
      color: 'white',
    },
    backgroundColor: menuItemMatchesRoutePath(menuItem.path)
      ? '#782878'
      : 'white',
    color: menuItemMatchesRoutePath(menuItem.path) && 'white',
  }));

  const IconContainer = styled(Box)(() => ({
    width: '40px',
    height: '26px',
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: !isStretched ? 'center' : undefined,
  }));

  const FlyoutMenu = styled(Box)(() => ({
    display: hovered || flyoutMenuHovered ? 'block' : 'none',
    backgroundColor: 'white',
    borderTopRightRadius: '0.35rem',
    borderBottomRightRadius: '0.35rem',
    width: '27rem',
    position: 'absolute',
    transform: 'translateX(100%)',
    border: '1px solid rgba(204, 204, 204, 0.466)',
    zIndex: 100,
    padding: '2px',
    fontSize: '11px',
    right: '-0.5%',
    top: topOffSet,
  }));

  const SubMenuFlyoutMenu = styled(Box)(() => ({
    display: subMenuItemHovered ? 'block' : 'none',
    backgroundColor: 'white',
    borderTopRightRadius: '0.35rem',
    borderBottomRightRadius: '0.35rem',
    width: '27rem',
    position: 'absolute',
    transform: 'translateX(100%)',
    border: '1px solid rgba(204, 204, 204, 0.466)',
    zIndex: 100,
    fontSize: '11px',
    right: '0%',
    top: subMenuTopOffSet.current,
  }));

  return (
    <Box ref={ref}>
      <Row
        onClick={() => handleClicked(menuItem)}
        onMouseEnter={() => showFlyoutMenu()}
        onMouseLeave={() => hideFlyoutMenu()}
      >
        {/* ======================================================= icon container */}
        <IconContainer>
          <FontAwesomeIcon icon={menuItem.icon} fontSize="18" />
        </IconContainer>

        <Stack
          flexDirection={isStretched ? 'row' : 'column'}
          alignItems="center"
          justifyContent="space-between"
          sx={{
            width: '100%',
          }}
        >
          <span
            style={{
              textAlign: 'center',
              flexShrink: 0,
              fontSize: '1.1rem',
            }}
          >
            {menuItem.label}
          </span>
          {menuItem.children && isStretched ? (
            <FontAwesomeIcon
              icon={
                pathList.includes(menuItem.path) ? faChevronUp : faChevronDown
              }
            />
          ) : null}
        </Stack>
      </Row>

      {/* ======================================================= sub-menu starts here */}
      {menuItem.children && isStretched ? (
        <Collapse
          in={pathList.includes(menuItem.path)}
          timeout="auto"
          unmountOnExit
          sx={{
            width: '85%',
            margin: '5px 0px 5px auto',
          }}
        >
          <Stack spacing={1} direction="column">
            {/* ==================================================== list of submenu item children */}
            {menuItem.children.map((item, index) => {
              return (
                <div
                  key={index}
                  ref={subMenuItemRef}
                  onMouseEnter={(e) => {
                    const top = e.target.getBoundingClientRect().top;
                    subMenuTopOffSet.current = top;
                    setSubMenuItemHovered(item.path);
                  }}
                  onMouseLeave={() => {
                    if (!subMenuFlyoutMenuHovered) {
                      setTimeout(() => {
                        setSubMenuItemHovered('');
                      }, 200);
                    }
                  }}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    sx={{
                      cursor: 'pointer',
                      borderTopLeftRadius: '0.35rem',
                      borderBottomLeftRadius: '0.35rem',
                      padding: '14px',
                      ':hover': {
                        backgroundColor: '#782878',
                        color: 'white',
                      },
                      backgroundColor: menuItemMatchesRoutePath(item.path)
                        ? '#782878'
                        : 'white',
                      color: menuItemMatchesRoutePath(item.path) && 'white',
                    }}
                  >
                    <IconContainer>
                      <FontAwesomeIcon icon={item.icon} fontSize="18" />
                    </IconContainer>
                    <span
                      style={{
                        color: menuItemMatchesRoutePath(item.path)
                          ? 'white'
                          : undefined,
                        textAlign: 'center',
                        flexShrink: 0,
                        fontSize: '11px',
                      }}
                    >
                      {item.label}
                    </span>
                  </Stack>
                  {/* ========================================================================================= submenu flyout menu */}
                  <SubMenuFlyoutMenu
                    onMouseEnter={() => {
                      setSubMenuFlyoutMenuHovered(item.path);
                    }}
                    onMouseLeave={() => {
                      setSubMenuItemHovered('');
                      setSubMenuFlyoutMenuHovered('');
                    }}
                  >
                    {getChildren(item.children).map((element, elementIndex) => {
                      return (
                        <ListItemButton
                          onClick={() => navigate(element.path)}
                          key={elementIndex}
                          sx={{
                            fontSize: '1.15rem',
                            padding: '1rem',
                            alignItems: 'center',
                            ':hover': {
                              color: 'white',
                              backgroundColor: '#782878',
                            },
                            color:
                              menuItemMatchesRoutePath(item.path) && 'white',
                            backgroundColor:
                              menuItemMatchesRoutePath(item.path) && '#782878',
                          }}
                        >
                          <IconContainer>
                            <FontAwesomeIcon
                              icon={element.icon}
                              fontSize="18"
                            />
                          </IconContainer>

                          {element.label}
                        </ListItemButton>
                      );
                    })}
                  </SubMenuFlyoutMenu>
                </div>
              );
            })}
          </Stack>
        </Collapse>
      ) : null}
      {/* ======================================================= sub-menu ends here */}

      {/* ============================================================================ flyout-menu */}
      {menuItem.children && !isStretched ? (
        <FlyoutMenu
          onMouseEnter={() => {
            setFlyoutMenuHovered(true);
          }}
          onMouseLeave={() => {
            setHovered(false);
            setFlyoutMenuHovered(false);
          }}
          direction="column"
          spacing="5px"
        >
          {menuItem.children.map((subMenuItem, subMenuIndex) => {
            const { label, children, path, icon } = subMenuItem;
            return (
              <Box key={subMenuIndex}>
                <ListItemButton
                  sx={{
                    width: '95%',
                    marginLeft: 'auto',
                    borderTopRightRadius: '0.35rem',
                    borderBottomRightRadius: '0.35rem',
                    backgroundColor: menuItemMatchesRoutePath(path)
                      ? '#782878'
                      : undefined,
                    color: menuItemMatchesRoutePath(path) ? 'white' : undefined,
                    ':hover': {
                      backgroundColor: '#782878',
                      color: 'white',
                    },
                  }}
                  onClick={() => {
                    if (!isStretched && children) {
                      if (pathList.includes(subMenuItem.path)) {
                        const list = [...pathList].filter(
                          (item) => item !== path
                        );
                        setPathList(list);
                      } else {
                        const list = [...pathList];
                        list.push(subMenuItem.path);
                        setPathList(list);
                      }
                    }
                  }}
                >
                  <IconContainer
                    sx={{
                      marginRight: '1.2rem',
                    }}
                  >
                    <FontAwesomeIcon icon={icon} fontSize="16" />
                  </IconContainer>

                  {label}
                  <div
                    style={{
                      flexGrow: 1,
                    }}
                  />
                  <FontAwesomeIcon
                    icon={pathList.includes(path) ? faChevronUp : faChevronDown}
                    fontSize="12px"
                  />
                </ListItemButton>
                <Collapse
                  in={pathList.includes(path)}
                  timeout="auto"
                  unmountOnExit
                >
                  <List
                    component="div"
                    sx={{
                      width: '90%',
                      marginLeft: 'auto',
                    }}
                  >
                    {children.map((item, index) => {
                      return (
                        <ListItemButton
                          sx={{
                            backgroundColor: menuItemMatchesRoutePath(path)
                              ? '#782878'
                              : undefined,
                            color: menuItemMatchesRoutePath(path)
                              ? 'white'
                              : undefined,
                            ':hover': {
                              backgroundColor: '#782878',
                              color: 'white',
                            },
                            borderTopRightRadius: '0.35rem',
                            borderBottomRightRadius: '0.35rem',
                          }}
                          key={index}
                          index={index}
                          onClick={() => navigate(item.path)}
                        >
                          <IconContainer>
                            <FontAwesomeIcon icon={item.icon} fontSize="14" />
                          </IconContainer>
                          {item.label}
                        </ListItemButton>
                      );
                    })}
                  </List>
                </Collapse>
              </Box>
            );
          })}
        </FlyoutMenu>
      ) : null}
    </Box>
  );
}

SideMenuItem.propTypes = {
  menuItem: PropTypes.shape().isRequired,
  isStretched: PropTypes.bool.isRequired,
};

export default SideMenuItem;
