import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material';

interface MainBannerProps {
  banner: {
    image: string;
    imageText: string;
    title: string;
  };
}

export default function MainBanner(props: MainBannerProps) {
  const { banner } = props;

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${banner.image})`,
      }}
    >
        {<img style={{ display: 'none' }} src={banner.image} alt={banner.imageText} />}
        <Grid>
            <Box
                sx={{
                position: 'relative',
                p: { xs: 18 },
                }}
            >
                <Typography component="h1" variant="h3" >
                    {banner.title}
                </Typography>
            </Box>
        </Grid>
    </Paper>
  );
}