/* eslint-disable react/prop-types */

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function AutoComplete(props) {
  const { placeholder, value, onChange, options, sx } = props;

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
    <Autocomplete
      onChange={onChange}
      value={value}
      clearIcon={
        <Box
          sx={{
            fontSize: '1.5rem',
            marginTop: '1px',
          }}
        >
          <ClearIcon
            sx={{
              fontSize: '14px',
            }}
          />
        </Box>
      }
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
      options={options}
      sx={{ ...sx }}
      renderInput={(params) => {
        return (
          <CustomTextField placeholder={placeholder} {...params} type="text" />
        );
      }}
    />
  );
}

export default AutoComplete;
