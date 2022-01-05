import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';




export default function Bio(){
    return (
        <Container component="section" sx={{ mt: 8, mb: 4 }}>
            <Typography variant="h4"
                marked="center" align="center"
                component="h2">
                About Me
            </Typography>
            <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
                <Typography variant="subtitle1" sx={{ my: 3 }}>
                    Full-Stack web developer with a professional background in Law Enforcement. Recently  earned a certificate in Full Stack Web Development from the University of North Carolina of Chapel Hill Coding Boot Camp with newly developed skills in JavaScript, HTML, ES6, React, CSS, Material-UI, BootStrap, and responsive design. Known as a passionate problem solver for developing new and current web projects. I worked on a team of four to develop a single-page MERN App that helps families organize their medical information in the event of an emergency.  For the project I applied responsive web design using Material-UI. I am excited to  utilize my skills as part of a team to build a  better web experience for users. 
                </Typography>
            </Box>
        </Container>
    )
}