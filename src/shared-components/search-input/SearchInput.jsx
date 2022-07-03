import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/pro-regular-svg-icons';
import { styled } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
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

function SearchInput(props) {
  const { sx } = props;
  return (
    <CustomTextField
      sx={{
        ...sx,
      }}
      placeholder="Search"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <FontAwesomeIcon fontSize="1.5rem" icon={faMagnifyingGlass} />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default SearchInput;
