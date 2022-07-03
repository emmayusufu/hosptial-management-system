import * as React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

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

function TextInput(props) {
  const {
    placeholder,
    onChange,
    value,
    error,
    helperText,
    name,
    id,
    type,
    sx,
    fullWidth,
  } = props;
  return (
    <CustomTextField
      sx={{ ...sx }}
      onChange={onChange}
      fullWidth={fullWidth}
      placeholder={placeholder}
      value={value}
      name={name}
      id={id}
      type={type}
      helperText={helperText}
      error={error}
    />
  );
}

export default TextInput;
