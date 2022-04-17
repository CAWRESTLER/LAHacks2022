import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

//api call for interests
const options = [
    'Web Development',
    'Software',
    'Hiking',
  ];

export default function MatchSelect() {
  const [interest, setInterest] = React.useState('');

  const handleChange = (event) => {
    setInterest(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Interests</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={interest}
          label="Interest"
          onChange={handleChange}
        >
        <MenuItem value="all">All</MenuItem>

          {options.map((option) => (
        <MenuItem value={option}>{option}</MenuItem>
        ))}
        </Select>
      </FormControl>
    </Box>
  );
}
