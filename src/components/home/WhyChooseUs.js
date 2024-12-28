import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import img14 from '../../assets/images/home/Rectangle14.webp'
import home1 from '../../assets/images/home/home1.webp'
import home2 from '../../assets/images/home/home2.webp'
import home3 from '../../assets/images/home/home3.webp'
import home4 from '../../assets/images/home/home4.webp'

function WhyChooseUs() {
  return (
    <Box py={5}>
         <Box sx={{backgroundImage:`url(${img14})`,backgroundRepeat:"no-repeat",backgroundAttachment:'fixed',backgroundSize:"cover"}}>
         <Container  sx={{maxWidth:{lg:"xl", sm:"lg"}}}>
               <Box sx={{padding:{md:"30px",xs:0}}}>
                   <Typography variant="h3" py={4} sx={{  fontSize: {xs: "38px", md: "40px", lg: "48px", xl: "42px",},color:"white",fontWeight:"600",fontFamily:"'Public Sans',sans-serif",textAlign:"center"}}>Why Choose Us?</Typography>
                   <Box py={3}>
                     <Typography sx={{color:"white",fontSize:{md:"20px",sm:"18px",xs:"14px"},fontWeight:"400",fontFamily:"'Prompt',sans-serif",textAlign:"center", lineHeight:{lg:"40px" , md:"40px" , sm:"30px",xs:"20px"}}}>At "Swiftex OVERSEAS", we specialize in exporting premium-quality onion powder, garlic powder, aluminum foil, and raw cotton to clients worldwide. Our products are sourced and processed with the highest standards, ensuring consistent quality and reliability. Whether you need finely ground onion and garlic powder for food production or durable aluminum foil for packaging solutions, we offer a diverse range to meet your needs. Additionally, our raw cotton is carefully selected for its purity and strength, ideal for textile and manufacturing industries. With competitive pricing, timely delivery, and exceptional customer service, we are your go-to partner for all your export requirements..</Typography>
                   </Box>
                   <Grid item container xs={12} py={5}>
                        <Grid item xs={6} md={4} lg={3} sx={{textAlign:"center"}}>
                            <img src={home1} alt="" width={"100px"}/>
                            <Typography sx={{color:"white",fontSize:"24px",textAlign:"center",fontFamily: "'Prompt', sans-serif",}}>We Are <br /> Trusted</Typography>
                        </Grid>
                        <Grid item xs={6} md={4} lg={3} sx={{textAlign:"center"}}>
                            <img src={home2} alt="" width={"100px"}/>
                            <Typography sx={{color:"white",fontSize:"24px",textAlign:"center",fontFamily: "'Prompt', sans-serif",}}>Supreme <br /> Safety</Typography>
                        </Grid>
                        <Grid item xs={6} md={4} lg={3} sx={{textAlign:"center"}}>
                            <img src={home3} alt="" width={"100px"}/>
                            <Typography sx={{color:"white",fontSize:"24px",textAlign:"center",fontFamily: "'Prompt', sans-serif",}}>100% <br /> Guarantee</Typography>
                        </Grid>
                        <Grid item xs={6} md={4} lg={3} sx={{textAlign:"center"}}>
                            <img src={home4} alt="" width={"100px"}/>
                            <Typography sx={{color:"white",fontSize:"24px",textAlign:"center",fontFamily: "'Prompt', sans-serif",}}>Prompt <br /> Location</Typography>
                        </Grid>   
                   </Grid>
               </Box>
            </Container>
         </Box>
    </Box>
  );
}

export default WhyChooseUs;
