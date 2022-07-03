import * as React from 'react';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

const CustomInput = styled(TextField, {
  shouldForwardProp: (prop) =>
    prop !== 'error' && prop !== 'variant' && prop !== 'sx',
})(({ theme, error }) => ({
  'label + &': {
    marginTop: theme.spacing(2),
  },
  '& .MuiInputBase-input': {
    borderRadius: 2,
    position: 'relative',
    fontSize: 13,
    height: '3.5rem',
    width: '100%',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
  },
}));

function FormInput(props) {
  const {
    label,
    value,
    helperText,
    onChange,
    error,
    required,
    name,
    id,
    type,
  } = props;
  return (
    <FormControl error={error} fullWidth variant="outlined" required={required}>
      <InputLabel
        shrink
        sx={{
          fontSize: '1.7rem',
        }}
      >
        {label}
      </InputLabel>
      <CustomInput
        value={value}
        onChange={onChange}
        name={name}
        id={id}
        type={type}
      />
      <FormHelperText
        sx={{
          fontSize: '12px',
        }}
      >
        {helperText}
      </FormHelperText>
    </FormControl>
  );
}

export default FormInput;
