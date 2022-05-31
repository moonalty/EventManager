
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import SvgIcon from '@mui/material/SvgIcon';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const useStyles = makeStyles((theme) => ({
  rootBox: {
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },
  footerNav: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginRight: 'auto',
    marginLeft: theme.spacing(3),
    marginBottom: theme.spacing(0),

    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginLeft: 'auto',
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
    }
  },
  footerLink: {
    color: "white",
    lineHeight: '15px',
    
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(2),
    }
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  const content = {
    'brand': { image: 'nereus-assets/img/nereus-light.png', width: 110 },
    'copy': '© 2022 Сделано в Санкт-Петербурге.',
    'link1': 'Адрес: г. Санкт-Петербург, ул. Кирочная, д.19',
    'link2': '@: spb@mail.ru',
    'link3': 'Телефон: 8 800 000 00 00',
 
    ...props.content
  };

  let brand;

  if (content.brand.image) {
    brand = <img src={ content.brand.image } alt="" width={ content.brand.width } />;
  } else {
    brand = content.brand.text || '';
  }

  return (
    <footer>
      <Container maxWidth="lg">
        <Box py={6} display="flex" flexWrap="wrap" alignItems="center" className={classes.rootBox}>
          <Link href="#" color="inherit" underline="none">
            {brand}
          </Link>
          <Box component="nav" className={classes.footerNav}>
            
            <h5 href="#" variant="body1" color="textPrimary" className={classes.footerLink}>{content['link1']}</h5>
            <h1 href="#" variant="body1" color="textPrimary" className={classes.footerLink}>|</h1>
            <div  >
            <h5 href="#" variant="body1" color="textPrimary" className={classes.footerLink}>{content['link2']}</h5>
            <div  style={{ display: "flex", justifyContent: 'space-between'}}>
            <TwitterIcon/>
            <InstagramIcon/>
            <TelegramIcon/>
            </div>

            </div>
            <h1 href="#" variant="body1" color="textPrimary" className={classes.footerLink}>|</h1>
            <h5 href="#" variant="body1" color="textPrimary" className={classes.footerLink}>{content['link3']}</h5>
           
            
           
          </Box>
          <Typography style={{color:'white'}} component="p" variant="caption" gutterBottom={false}>{content['copy']}</Typography>
        </Box>
        
      </Container>
    </footer>

  );
}
