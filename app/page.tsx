import Image from 'next/image'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


export default function Home() {
  return (

    <main>
      <Box>
        <Grid container spacing={2}>
        <Grid item xs={8}>
         xs=8
        </Grid>
        <Grid item xs={4}>
         xs=4
        </Grid>
        <Grid item xs={4}>
         xs=4
        </Grid>
        <Grid item xs={8}>
         xs=8
        </Grid>
        </Grid>
      </Box>
    </main>

  )
}
