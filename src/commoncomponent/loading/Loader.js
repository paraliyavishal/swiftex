import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { keyframes } from '@emotion/react';
import gsap from 'gsap';
import ship from '../../assets/images/Ship2.json';
import Lottie from 'lottie-react';



const Loader = ({ onComplete }) => {
  // Define the keyframes
  const loading06 = keyframes`
    0%, 75%, 100% {
      transform: rotateY(-180deg);
      opacity: 0;
    }
    25%, 50% {
      transform: rotateY(0);
      opacity: 1;
    }
  `;
  useEffect(() => {
    // Hide scrollbar when loader is active
    document.body.style.overflow = 'hidden';
    if (typeof onComplete === 'function') {
      gsap.to('.preloader', {
        opacity: 0,
        duration: 0,
        y: '-100%',
        ease: 'power1.out',
        delay: 4, // Matches the duration of the loader animation
        onComplete: () => {
          document.querySelector('.preloader').style.display = 'none';
          document.body.style.overflow = ''; // Reset overflow style
          onComplete(); // Notify when preloader animation is complete
        }
      });
    } else {
      console.error('onComplete is not a function');
    }
    // Cleanup: reset body overflow on component unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [onComplete]);
  return (
    <Box className="preloader"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "#21324D",
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <Box className="loading06">
        <Lottie
          animationData={ship}
          style={{ height: '300px', width: '300px', backgroundColor: "#21324d92" }}
        />
      </Box>
    </Box>
  );
}
export default Loader;