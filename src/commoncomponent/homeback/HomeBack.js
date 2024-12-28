import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import NavigationIcon from '@mui/icons-material/Navigation';

function HomeBack() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setShowButton(scrollTop > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      id="back-to-top"
      sx={{
        position: 'fixed',
        bottom: 30,
        right: 15,
        zIndex: 999,
        border: '2px solid #21324D',
        fontSize: '26px',
        width: '50px',
        height: '50px',
        borderRadius: '20%',
        textAlign: 'center',
        cursor: 'pointer',
        display: showButton ? 'block' : 'none',
        bgcolor: 'transparent',
      }}
      onClick={scrollToTop}
    >
      <NavigationIcon sx={{ fontSize: 18, color: "#DF3E26" }} />
    </Box>
  );
}

export default HomeBack;