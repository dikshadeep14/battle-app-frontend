import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function AutoCompleteSearchBox({
  id,
   label,
   inputValue,
   setInputValue,
   optionList
}) {
   const options = optionList;
  const [value, setValue] = React.useState('');

  return (
    <div>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id={id ? id : "controllable-states-demoid"}
        options={options}
        style={{ maxWidth: 200 }}
        renderInput={(params) => <TextField {...params} label={label} variant="outlined" />}
      />
    </div>
  );
}

AutoCompleteSearchBox.propTypes = {
  label: PropTypes.string,
  inputValue: PropTypes.string,
  setInputValue: PropTypes.func,
  optionList: PropTypes.array
};
