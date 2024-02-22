import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularColor() {
  return (
    <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
      <CircularProgress  sx={{  color:"white !important", height: '30px !important', width: '30px !important' }} />
       {/* <CircularProgress color=""  /> */}
      {/*<CircularProgress color="inherit" /> */}
    </Stack>
  );
}