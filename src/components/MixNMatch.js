import * as React from 'react';
import Header from './Header';
import Paper from './Paper';


import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import Snackbar from './Snackbar';
import ResumeHero from '../views/ResumeHero';
import Projects from './Projects';
import Bio from './Bio';
import Modal from '@mui/material/Modal';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from './Typography';
import TextField from './TextField';

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

// const images = [
//   {
//     url: 'https://i.ibb.co/FzdLXGS/weather-App.jpg',
//     title: 'Weather App',
//     width: '35%',
//   },
//   {
   
//     url: 'https://i.ibb.co/0tNcMsG/Matches-Dashboard.png',
//     title: "Mix 'N' Match",
//     width: '30%',
//     href: "https://hlbrown.github.io/WeatherApp/",
//   },
//   {
    
//     url: "https://i.ibb.co/syqY7T3/JIT.png",
//     title: 'Just In Time',
//     width: '35%',
//     href: "../../pages/WeatherApp",
//   },
//   {
//     url: "https://i.ibb.co/X3P3LvH/Note-Taker.jpg",
//     title: 'Note Taker',
//     width: '35%',
//     href: "https://hlbrown.github.io/WeatherApp/",
//   },
//   {
//     url: "",
//     title: "",
//     width: "30%",
//     href: "https://hlbrown.github.io/WeatherApp/",
//   }
  
// ];




const modalStyle = {
   position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
}
function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Links</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...modalStyle, width: 200 }}>
                  <h5 id="child-modal-title">Links related to this project are below and will open in another window.</h5>
                  <ul>
                      <Link href="https://github.com/hlbrown/project-2-full-stack" target="_blank"><li>Github Repo: </li></Link>
                      <Link href="http://frozen-inlet-56976.herokuapp.com/login" target="_blank"><li>Live URL</li></Link>
                  </ul>
          <Button onClick={handleClose}>Close Links</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}



export default function MixNMatch() {
     const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
    return (
    
       
          <ImageIconButton
            style={{
              width: '30%',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(https://i.ibb.co/0tNcMsG/Matches-Dashboard.png)`,
              }}
            />
              <ImageBackdrop className="imageBackdrop" />            
          
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              ><Button color="inherit" onClick={handleOpen}>Mix 'N' Match</Button>
                <Modal
                open={open}
                  onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
                >
                  <Box sx={{ ...modalStyle, width: 400 }}>
                <h2 id="parent-modal-title">Mix 'N' Match</h2>
                <p id="parent-modal-description">
                Mix 'N' Match is a fullstack web application that allows a user to find other people based off their drink preference. User's can choose not to "match" with the other person. Mix 'N' Match is designed for both casual and romantic matching.
                    </p>
                    <ul>
                      <li>Sequelize</li>
                      <li>Cloudinary</li>
                      <li>MySQL</li>
                      <li>Deployed with Heroku</li>
                                    <li>Express-Handlebars</li>
                                    <li>Google API's</li>
                                    <li>Styled with Bootstrap</li>
                    </ul>
          <ChildModal />
        </Box>

                </Modal>              
                <div className="imageMarked" />
              </Typography>
            </Box>
          </ImageIconButton>
    );
}