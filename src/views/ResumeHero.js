import * as React from 'react';
import Button from '../components/Buttons';
import Typography from '../components/Typography';
import ResumeHeroLayout from './ResumeHeroLayout';
// import portImage from '../assets/portImage.jpg';
const backgroundImage = "https://i.ibb.co/sCttk6N/port-Image.jpg";


export default function ResumeHero() {
  return (
    <ResumeHeroLayout
      sxBackground={{
         backgroundImage:`url(${backgroundImage})`, // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h4" marked="center">
        Hannah Nagle
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Full-Stack Web Developer
      </Typography>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Let's build together
      </Typography>
    </ResumeHeroLayout>
  );
}