import * as React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundColor: theme.palette.grey[400],
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.1)',
  }),
  ...(ownerState.completed && {
    backgroundColor: '#782878',
  }),
}));

function StyledStepIconRoot(props) {
  const { active, completed, className, icon } = props;

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      <Typography fontSize="1.4rem" color="inherit">
        {String(icon)}
      </Typography>
    </ColorlibStepIconRoot>
  );
}

export default StyledStepIconRoot;
