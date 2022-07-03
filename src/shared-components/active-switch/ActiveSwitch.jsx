import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

const ActiveSwitch = styled(Switch)(({ theme }) => ({
  width: '6rem',
  height: '2.9rem',
  padding: '0px',
  '& .MuiSwitch-track': {
    borderRadius: '20px',
    backgroundColor: '#CE0610',
    opacity: '1 !important',
    '&:after, &:before': {
      color: 'white',
      fontSize: '11px',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-45%)',
    },
    '&:after': {
      content: "'On'",
      left: '10px',
    },
    '&:before': {
      content: "'Off'",
      right: '10px',
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 25,
    height: 25,
    color: 'white',
  },
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    color: 'white',
    '&.Mui-checked': {
      transform: 'translateX(31px)',
      '& + .MuiSwitch-track': {
        backgroundColor: '#7AB800',
        opacity: 1,
        border: 0,
      },
    },
  },
}));

export default ActiveSwitch;
