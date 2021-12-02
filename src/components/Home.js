import * as React from 'react';
import Header from './Header';
import Paper from './Paper';
import ProductValues from './ProductValues';
import Button from './Buttons';
import Snackbar from './Snackbar';
import ResumeHero from '../views/ResumeHero';
import Projects from './Projects';
import Bio from './Bio';


import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from './Typography';
import TextField from './TextField';


const iconStyle = {
  width: 48,
  height: 48,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'warning.main',
  mr: 1,
  '&:hover': {
    bgcolor: 'warning.dark',
  },
};

function Copyright() {
    return (
        <React.Fragment>
            {'@'}
            <Link color="inherit" href="">
                My Website
            </Link>{' '}
            {new Date().getFullYear()}
        </React.Fragment>
    );
}
const LANGUAGES = [
    {
        code: 'en-US',
        name: 'English',
    },
    {
        code: 'fr-FR',
        name: 'Francis',
    },
];

export default function Home() {
    return (
        <div>
            <div>
                <Header />
                <ResumeHero />
                <Bio />
               
            </div>
            
            <div>
                <Projects />
                <ProductValues />
            </div>

        <div>
                <Typography
                    component="footer"
                    sx={{ display: 'flex', bgcolor: 'secondary.light' }}
                >
                    <Container sx={{my: 8, display: 'flex'}}>
                        <Grid container spacing={5}>
                            <Grid item xs={6} sm={4} md={3}>
                                <Grid
                                    container
                                    direction="column"
                                    justifyContent="flex-end"
                                    spacing={2}
                                    sx={{ height: 120 }}
                                >
                                    <Grid item sx={{ display: 'flex' }}>
                                        <Box component="a" href="https://mui.com/" sx={iconStyle}>
                                            <img
                                                src="/static/themes/onepirate/appFooterFacebook.png"
                                                alt="Facebook"
                                            />
                                        </Box>                                        
                                    </Grid>
                                    <Grid item>
                                        <Copyright />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} sm={4} md={2}>
                            <Typography
                                variant="h6"
                                marked="left"
                                gutterButtom
                            >
                                Legal
                            </Typography>
                            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
                                <Box component="li" sx={{py: 0.5}}>
                                <Link href="">Contact</Link>
                                </Box>
                                <Box component="li" sx={{py: 0.5}}>
                                <Link href="">About</Link>
                            </Box>
                            </Box>                            
                        </Grid>
                        <Grid item xs={6} sm={8} md={4}>
                            <Typography variant="h6" marked="left" gutterBottom>
                                Language
                            </Typography>
                            <TextField
                              select
                              size="medium"
                              variant="standard"
                              SelectProps={{
                                native: true,
                              }}
                              sx={{ mt: 1, width: 150 }}
                            >
                              {LANGUAGES.map((language) => (
                                <option value={language.code} key={language.code}>
                                  {language.name}
                                </option>
                              ))}
                            </TextField>
                        </Grid>
                    </Container>
                </Typography>
            </div>
        </div>
    );
}