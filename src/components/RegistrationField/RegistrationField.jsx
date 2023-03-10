import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

const RegistrationField = ({ type, formik, name }) => {
  return (
    <TextField
      //formik
      id={name || type}
      type={type}
      name={name || type}
      onChange={formik.handleChange}
      value={formik.values[name || type]}
      error={formik.touched[name || type] && formik.errors[name || type]}
      helperText={formik.touched[name || type] && formik.errors[name || type]}
      onBlur={formik.handleBlur}
      //mui
      size="small"
      variant="filled"
      label={name || type}
      margin="normal"
      fullWidth
      required
    />
  );
};

export default RegistrationField;

RegistrationField.propTypes = {
  type: PropTypes.string.isRequired,
  formik: PropTypes.object.isRequired,
  name: PropTypes.string,
};
