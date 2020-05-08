import React from 'react';
import TextField from '@material-ui/core/TextField';
const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
    <TextField
      label={label}
      placeholder={label}
      error={touched && invalid}
      onFocus ={ input.onFocus }
      onBlur = {input.onBlur}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  )
export default renderTextField;