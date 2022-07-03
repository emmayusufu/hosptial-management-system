import * as React from 'react';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import PropTypes from 'prop-types';
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

function FormTimePicker(props) {
  const { label, value, helperText, onChange, error, required, name, id, sx } =
    props;
  return (
    <FormControl
      error={error}
      fullWidth
      variant="outlined"
      required={required}
      sx={{ ...sx }}
    >
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
        type="time"
        name={name}
        id={id}
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

FormTimePicker.defaultProps = {
  helperText: '',
  error: false,
  required: false,
};

FormTimePicker.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  helperText: PropTypes.string,
  error: PropTypes.bool,
  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  sx: PropTypes.string.isRequired,
};

export default FormTimePicker;
