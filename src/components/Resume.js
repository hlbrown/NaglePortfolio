import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';

library.add(faFilePdf);


export default function resume() {
    return (
        <Container component="section" sx={{ mt: 8, mb: 4 }}>
            <Typography variant="h4"
                marked="center" align="center"
                component="h2">
                Resume
            </Typography>
            <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
                <Typography variant="subtitle1" sx={{ my: 3 }}>
                    <FontAwesomeIcon icon={faFilePdf}/>
                </Typography>
            </Box>
        </Container>
    );
}