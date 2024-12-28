import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import bgimg from '../../assets/images/aboutus/infobgimg.webp'
import logo1 from '../../assets/images/aboutus/logo1.webp'
import logo2 from '../../assets/images/aboutus/logo2.webp'
import logo3 from '../../assets/images/aboutus/logo3.webp'


function Aboutinfo() {
    return (
        <Box mb={5}>
            <Container  sx={{maxWidth:{lg:"xl", sm:"lg"}}}>
                <Box sx={{ backgroundImage:`url(${bgimg})`, objectFit: "cover", backgroundSize: "cover",borderRadius:"30px",padding:"30px" ,backgroundRepeat: "no-repeat", width: "100%", }}>
                    <Grid container item xs={12} color={"#FFFF"} display={"flex"} justifyContent={"center"}>
                        <Grid item xs={12} sm={6} md={4} lg={4} sx={{ textAlign: 'center',padding:{lg:"50px 20px",md:"40px",sm:"30px",xs:"5px 5px 15px 5px"} }}>
                            <Box>
                                <img src={logo1} alt='' />
                                <Typography sx={{ fontSize:{lg:"24px",sm:"24px",xs:"20px"}, fontFamily: "'Public Sans', sans-serif", fontWeight: "700",paddingTop:"15px" ,marginBottom:{lg:"28px",md:"28px",xs:"10px"} }}>Trust Worthiness</Typography>
                                <Typography sx={{ color: "#FFFFFF80", fontFamily:"'Prompt', sans-serif", }}>
                                    People may feel that trust is no longer valuable in
                                    relationships or business dealings, particularly if they
                                    have experienced betrayal or dishonesty.
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid itemxs={12} sm={6} md={4} lg={4} sx={{ textAlign: 'center',padding:{lg:"50px 20px",md:"40px",sm:"24px",xs:"5px 5px 45px 5px"}  }}>
                            <Box>
                                <img src={logo2} alt='' />
                                <Typography sx={{ fontSize:{lg:"24px",sm:"24px",xs:"20px"}, fontFamily:"'Public Sans', sans-serif", fontWeight: "700", marginBottom:{lg:"28px",md:"28px",xs:"10px"} }}>High Quality</Typography>
                                <Typography sx={{ color: "#FFFFFF80", fontFamily: "'Prompt', sans-serif", }}>
                                    High-quality items are designed to withstand wear and
                                    tear over time, providing long-term use and reducing
                                    the need for frequent replacements.
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4} lg={4} sx={{ textAlign: 'center',padding:{lg:"50px 20px",md:"40px",sm:"24px",xs:"5px 5px 15px 5px"} }}>
                            <Box>
                                <img src={logo3} alt='' />
                                <Typography sx={{ fontSize:{lg:"24px",sm:"24px",xs:"20px"}, fontFamily: "'Public Sans', sans-serif", fontWeight: "700", marginBottom:{lg:"28px",md:"28px",xs:"10px"} }}>Worldwide Services</Typography>
                                <Typography sx={{ color: "#FFFFFF80", fontFamily:"'Prompt', sans-serif", }}>
                                    worldwide services leverage technology to deliver their offerings,
                                    such as e-commerce websites, mobile apps, and digital marketing
                                    tools.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default Aboutinfo;
