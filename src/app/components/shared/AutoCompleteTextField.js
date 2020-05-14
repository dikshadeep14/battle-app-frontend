import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function AutoCompleteSearchBox({
   label,
   inputValue,
   setInputValue,
   optionList
}) {
   const options = optionList;
  const [value, setValue] = React.useState('');

  return (
    <div>
      {/* <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <br /> */}
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        style={{ maxWidth: 200 }}
        renderInput={(params) => <TextField {...params} label={label} variant="outlined" />}
      />
    </div>
  );
}
