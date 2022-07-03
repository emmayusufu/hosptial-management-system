/* eslint-disable react/prop-types */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';
import Autocomplete from '@mui/material/Autocomplete';

const list = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
];

function FormAutoComplete(props) {
  const { label, value, helperText, onChange, error, required, options, sx } =
    props;

  const CustomAutocomplete = styled(Autocomplete)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(2),
    },
    '& .MuiInputBase-input': {
      borderRadius: 2,
      position: 'relative',
      fontSize: 13,
      height: '35px',
      width: '100%',
      padding: '10px 12px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
    },
  }));

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

  return (
    <FormControl
      sx={{
        ...sx,
      }}
      error={error}
      fullWidth
      variant="outlined"
      required={required}
    >
      <InputLabel
        shrink
        sx={{
          fontSize: '1.7rem',
        }}
      >
        {label}
      </InputLabel>
      <CustomAutocomplete
        onChange={onChange}
        value={value}
        options={list}
        popupIcon={
          <Box
            sx={{
              fontSize: '1.5rem',
              marginTop: '1px',
            }}
          >
            <ArrowDropDownIcon
              sx={{
                fontSize: '18px',
              }}
            />
          </Box>
        }
        renderInput={(params) => (
          <div ref={params.InputProps.ref}>
            <CustomTextField
              sx={{
                width: '100%',
              }}
              type="text"
              {...params}
            />
          </div>
        )}
      />

      <FormHelperText
        sx={{
          fontSize: '13px',
        }}
      >
        {helperText}
      </FormHelperText>
    </FormControl>
  );
}

export default FormAutoComplete;
