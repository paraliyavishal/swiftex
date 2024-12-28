import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import work1 from '../../assets/images/services/workimg1.webp'
import work2 from '../../assets/images/services/workimg2.webp'

function Howwework() {
    return (
        <Box component="section" marginTop={'130px'} marginBottom={'100px'}>
            <Container sx={{ maxWidth: { lg: "xl", sm: "lg" } }}>
                <Grid container item xs={12} spacing={4} display={"flex"} justifyContent={"center"}>
                    
                    {/* Image Section */}
                    <Grid item xs={12} sm={12} md={12} lg={6}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center', 
                            alignItems: '', 
                            marginBottom: '50px',
                            width: '100%',
                            height: 'auto',
                            position: 'relative',
                            '@media (max-width: 310px)': {
                                height: 'auto',
                            },
                        }}
                    >
                        {/* Descriptive Alt Text */}
                        <img
                            src={work1}
                            alt='Warehouse workers handling import goods'
                            style={{
                                width: '70%', 
                                height: 'auto',
                                objectFit: 'cover',
                                display: 'block',
                                maxHeight: '100%', 
                                borderRadius: '10px'
                            }}
                        />
                        <img
                            src={work2}
                            alt='Freight trucks transporting export products'
                            style={{
                                position: 'absolute',
                                objectFit: 'cover',
                                bottom: '-80px', 
                                right: '10px',  
                                width: '50%',   
                                maxWidth: '400px', 
                                height: 'auto',
                                borderRadius: '10px'
                            }}
                        />
                    </Grid>

                    {/* Text Section */}
                    <Grid item xs={12} sm={12} md={12} lg={6} sx={{ width: '100%' }}>
                        
                        {/* Main Heading (H1 for SEO) */}
                        <Typography 
                            component="h2"
                            sx={{
                                fontSize: "24px",
                                fontFamily: "'Public Sans', sans-serif",
                                fontWeight: "600"
                            }}
                        >
                            We Provide Import and Export Services
                        </Typography>
                        
                        {/* Body Text */}
                        <Typography 
                            component="p"
                            sx={{
                                fontSize: {  md: "18px", xs: "16px" },
                                color:"#00000080",
                                fontFamily: "'Public Sans', sans-serif",
                                marginTop: { lg: "24px", md: "24px", xs: "5px" },
                                marginBottom: '30px'
                            }}
                        >
                            Our company identifies products in foreign markets that have potential demand in their home country. We assess factors like price, quality, and availability. We also determine which domestically produced goods have strong potential in foreign markets.
                        </Typography>

                        {/* Import Services Subheading */}
                        <Typography 
                            component="h2"
                            sx={{
                                fontSize: "24px",
                                fontFamily: "'Public Sans', sans-serif",
                                fontWeight: "600"
                            }}
                        >
                            Import Services
                        </Typography>
                        <Typography 
                            component="p"
                            sx={{
                                fontSize: { md: "18px", xs: "16px" },
                                color:"#00000080",
                                fontFamily: "'Public Sans', sans-serif",
                                marginTop: { lg: "24px", md: "24px", xs: "5px" },
                                marginBottom: '30px'
                            }}
                        >
                            Our import services encompass essential activities like customs brokerage, where experts handle the clearance of goods through customs, ensuring all necessary documents are prepared and that the importer complies with local regulations. Freight forwarding is another critical service we provide to ensure smooth transport.
                        </Typography>

                        {/* Export Services Subheading */}
                        <Typography 
                            component="h2"
                            sx={{
                                fontSize: "24px",
                                fontFamily: "'Public Sans', sans-serif",
                                fontWeight: "600"
                            }}
                        >
                            Export Services
                        </Typography>
                        <Typography 
                            component="p"
                            sx={{
                                fontSize: {md: "18px", xs: "16px" },
                                color:"#00000080",
                                fontFamily: "'Public Sans', sans-serif",
                                marginTop: { lg: "24px", md: "24px", xs: "5px" },
                                marginBottom: '30px'
                            }}
                        >
                            Our export services provide businesses with a comprehensive set of offerings, from market research to international shipping, helping businesses thrive in global markets. We analyze potential markets, assess demand, and offer insights into the competitive landscape.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Howwework;
