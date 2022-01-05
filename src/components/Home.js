import * as React from 'react';
import Header from './Header';
import Paper from './Paper';
import Button from './Buttons';
import Snackbar from './Snackbar';
import ResumeHero from '../views/ResumeHero';
import Projects from './Projects';
import Bio from './Bio';
import Skills from './Skills';


import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from './Typography';
import TextField from './TextField';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';

import { HashLink } from 'react-router-hash-link';

library.add(faFacebookF, faLinkedin , faFilePdf, faGithub);


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
           {' '}
            {new Date().getFullYear()}
        </React.Fragment>
    );
}
function Resume() {
    return (
        <React.Fragment>
            <FontAwesomeIcon color ="inherit"icon={faFilePdf} size="lg" />{' '}
            <Link color="inherit" href="https://drive.google.com/file/d/1rknRXaov0BN6IjdEWQFYF4hWYpmwszqI/view?usp=sharing">Resume</Link>
        </React.Fragment>
    )
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
            </div>
            <div id="about">
                <Bio />
            </div>
            
            <div id="projects">
                <Projects />               
            </div>
            <div id="skills">
                <Skills />
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
                                        <Box component="a" href="https://www.linkedin.com/in/hannahnagle/" target="_blank">
                                            <FontAwesomeIcon icon={faLinkedin} color="inherit" size="lg"/>
                                        </Box> 
                                         <Box component="a" href="https://github.com/hlbrown" target="_blank" sx={{ml:1}}>
                                            <FontAwesomeIcon icon={faGithub} color="black" size="lg"/>
                                        </Box>
                                    </Grid>
                                    <Grid item>
                                    <Resume />

                                    </Grid>
                                    <Grid item>
                                       
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} sm={4} md={2}>
                            {/* <Typography
                                variant="h6"
                                marked="left"
                                gutterButtom
                            >
                                Legal
                            </Typography> */}
                            {/* <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
                                <Box component="li" sx={{py: 0.5}}>
                                <Link href="">Contact</Link>
                                </Box>
                                <Box component="li" sx={{py: 0.5}}>
                                <Link href="/#about">About</Link>
                            </Box> */}
                            {/* </Box>                             */}
                        </Grid>
                        <Grid item xs={6} sm={8} md={4}>
                            {/* <Typography variant="h6" marked="left" gutterBottom>
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
                            </TextField> */}
                        </Grid>
                    </Container>
                </Typography>
            </div>
        </div>
    );
}