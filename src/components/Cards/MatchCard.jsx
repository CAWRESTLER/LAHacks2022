import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MatchList from '../Lists';
import MatchSelect from '../DropDown/Match';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const widdth = {
    width: 30,
    paddingTop: 10,
}

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Matches 
      </Typography>
      <div style = {widdth}>
        <MatchSelect />
      </div>
    </CardContent>
    <MatchList />
  </React.Fragment>
);

export default function MatchCard() {
  return (
    <Box sx={{ minWidth: 270 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
