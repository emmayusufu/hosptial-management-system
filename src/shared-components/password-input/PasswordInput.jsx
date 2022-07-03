import * as React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const CustomTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    height: '5.5rem',
    fontSize: '1.3rem',
    '& fieldset': {
      border: '1.5px solid #b1b5ba',
      borderRadius: 2,
    },
  },
});

function PasswordInput(props) {
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const {
    placeholder,
    onChange,
    value,
    error,
    helperText,
    name,
    id,
    fullWidth,
  } = props;
  return (
    <CustomTextField
      onChange={onChange}
      placeholder={placeholder}
      type={passwordVisible ? 'text' : 'password'}
      name={name}
      id={id}
      value={value}
      helperText={helperText}
      fullWidth={fullWidth}
      error={error}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={togglePasswordVisibility}>
              {passwordVisible ? (
                <VisibilityOffIcon sx={{ fontSize: 20 }} />
              ) : (
                <VisibilityIcon sx={{ fontSize: 20 }} />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

export default PasswordInput;
