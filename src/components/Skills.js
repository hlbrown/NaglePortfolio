import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import LogoCube from '../components/Cube';

import Grid from '@mui/material/Grid';





export default function Skills(){
    return (
        <Container component="section" sx={{ mt: 8, mb: 4 }}>
            <Typography variant="h4"
                marked="center" align="center"
                component="h2">
                Skills
            </Typography>
            <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
                <Grid container spacing={5}>
                    <Grid item xs={6} sm={4} md={3}>
                        <Grid
                            container
                            direction="column"
                            justifyContent="flex-end"
                            spacing={2}
                            sx={{height:120}}
                        >
                            <Grid item sx={{
                                display: 'flex'
                            }}>
                                <ul>
                                    <li>HTML</li>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>ES6</li>
                                </ul>
                            </Grid>
                            <Grid item xs={6} sm={8} md={4}>
                                <ul>
                                    <li>BootStrap</li>
                                    <li>CSS</li>
                                    <li>Material-UI</li>
                                    <li>Material CSS</li>
                                </ul>
                            </Grid>
                            <Grid item>
                              
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                  <LogoCube/>
            </Box>
        </Container>
    )
}