import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';

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
    // border: `1.5px solid ${error ? 'red' : '#ced4da'}`,
    fontSize: 13,
    width: '100%',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
  },
}));
function FormTextInput(props) {
  const { label, value, helperText, onChange, error, required, id, number } =
    props;

  return (
    <FormControl error={error} fullWidth variant="outlined" required={required}>
      <InputLabel
        sx={{
          fontSize: '1.7rem',
        }}
        shrink
      >
        {label}
      </InputLabel>
      <CustomInput
        value={value}
        onChange={onChange}
        id={id}
        error={error}
        number={number}
        multiline
        rows={6}
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

export default FormTextInput;
