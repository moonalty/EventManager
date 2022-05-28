import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary">
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

 function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width:'100%'
        
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 0, mb: 2 }} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          {/* Тут должна была быть великолепная верстка */}
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {/* {'Pin a footer to the bottom of the viewport.'}
          {'The footer will move as the main element of the page grows.'} */}
        </Typography>
        {/* <Typography variant="body1">Но сегодня без нее 😱</Typography> */}
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 20,
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            Event Manager
          </Typography>
          {/* <Copyright /> */}
        </Container>
      </Box>
    </Box>
  );
}

export default Footer
