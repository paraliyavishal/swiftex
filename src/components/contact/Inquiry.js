import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import call from '../../assets/images/contact/call.png'
import map from '../../assets/images/contact/map.png'
import mart from '../../assets/images/contact/mart.png'
import epc from '../../assets/images/contact/epc.png'
import dollar from '../../assets/images/contact/$.png'
import mail from '../../assets/images/contact/mail.png'
import insta from '../../assets/images/contact/insta.png'
import trade from '../../assets/images/contact/trade.png'
import embassy from '../../assets/images/contact/embassy.png'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Inquiry() {
  const { id } = useParams();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      contact: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required('First Name is required'),
      last_name: Yup.string().required('Last Name is required'),
      contact: Yup.string().required('Contact number is required'),
      email: Yup.string().email('Invalid email format').required('Email is required'),
      subject: Yup.string().required('Subject is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: (values) => {
      axios
        .post("https://swiftx.onrender.com/api/inquiry", values)
        .then(() => {
          navigate("/");
        })
        .catch((err) => console.log(err));
    },
  });

  useEffect(() => {
    if (id) {
      axios
        .get(`https://swiftx.onrender.com/api/inquiry/${id}`)
        .then((res) => {
          formik.setValues({
            first_name: res.data.first_name,
            last_name: res.data.last_name,
            contact: res.data.contact,
            email: res.data.email,
            subject: res.data.subject,
            message: res.data.message,
          });
        })
        .catch((err) => console.log(err));
    }
  }, [id]);

  const textFieldStyles = {
    fontFamily: "'Gothic A1', sans-serif",
    color: "#294E69",
    width: { lg: "100%", md: "100%", xs: "100%" },
    '& .MuiOutlinedInput-root': {
      backgroundColor: "white",
      padding: "5px px",
      borderRadius: "10px",
      '& input': {
        '&::placeholder': { color: '#294E69', opacity: 1, fontFamily: "'Gothic A1', sans-serif" },
      },
      '&:hover fieldset': { borderColor: 'white' },
      '&.Mui-focused fieldset': { borderColor: '#294E69' },
    },
  };

  return (
    <Box py={5} pt={15} >
        <Container  sx={{maxWidth:{lg:"xl", sm:"lg"}}}>
              <Grid item container xs={12} spacing={3} pb={5}  display={"flex"} justifyContent={"center"}>
              <Grid item xs={12} md={10} lg={6}>
            <Box sx={{ padding: "50px", backgroundColor: "#EBEBEB", textAlign: "center", borderRadius: "20px" }}>
              <Typography sx={{ fontSize: "36px", fontFamily: "'Public Sans', sans-serif" }}>Send Inquiry</Typography>
              <Box py={2}>
                <Typography sx={{ fontSize: "16px", fontFamily: "'Public Sans', sans-serif", color: "#294E69" }}>Let us know if you need any information or have any queries by</Typography>
                <Typography sx={{ fontSize: "16px", fontFamily: "'Public Sans', sans-serif", color: "#294E69" }}>using the form below.</Typography>
              </Box>

              <form onSubmit={formik.handleSubmit}>
                <Box sx={{ display: "flex", flexWrap: { lg: "nowrap", md: "nowrap", xs: "wrap" }, justifyContent: "center", gap: "20px" }} py={2}>
                  <TextField
                    name="first_name"
                    placeholder='First Name *'
                    variant="outlined"
                    value={formik.values.first_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.first_name && Boolean(formik.errors.first_name)}
                    helperText={formik.touched.first_name && formik.errors.first_name}
                    sx={textFieldStyles}
                  />
                  <TextField
                    name="last_name"
                    placeholder='Last Name *'
                    variant="outlined"
                    value={formik.values.last_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.last_name && Boolean(formik.errors.last_name)}
                    helperText={formik.touched.last_name && formik.errors.last_name}
                    sx={textFieldStyles}
                  />
                </Box>
                <Box sx={{ display: "flex", flexWrap: { lg: "nowrap", md: "nowrap", xs: "wrap" }, justifyContent: "center", gap: "20px" }} pb={2}>
                  <TextField
                    name="contact"
                    placeholder='Contact *'
                    variant="outlined"
                    value={formik.values.contact}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.contact && Boolean(formik.errors.contact)}
                    helperText={formik.touched.contact && formik.errors.contact}
                    sx={textFieldStyles}
                  />
                  <TextField
                    name="email"
                    placeholder='Email *'
                    variant="outlined"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    sx={textFieldStyles}
                  />
                </Box>
                <Box display={"flex"} gap={2} justifyContent={"center"} pb={2}>
                  <TextField
                    name="subject"
                    placeholder='Subject'
                    variant="outlined"
                    value={formik.values.subject}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.subject && Boolean(formik.errors.subject)}
                    helperText={formik.touched.subject && formik.errors.subject}
                    sx={textFieldStyles}
                  />
                </Box>
                <Box display={"flex"} gap={2} justifyContent={"center"} pb={3}>
                  <TextField
                    name="message"
                    placeholder='Your Message *'
                    variant="outlined"
                    multiline
                    rows={5}
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.message && Boolean(formik.errors.message)}
                    helperText={formik.touched.message && formik.errors.message}
                    sx={textFieldStyles}
                  />
                </Box>

                <Button
                  type="submit"
                  sx={{ backgroundColor: "#DF3E26", padding: "15px 30px", borderRadius: "10px", color: "white" }}>
                  Submit Interest
                </Button>
              </form>
            </Box>
          </Grid>
                   <Grid item xs={12} md={10} lg={6}>
                        <Box sx={{paddingLeft:{lg:"60px",md:"60px",xs:"0px"}}}>
                          <Typography sx={{fontSize:"40px",fontFamily:"'Public Sans',sans-serif",textAlign:{lg:"start",md:"start",xs:"center"}}} fontWeight={600}>Get In Touch</Typography>
                          <Box py={2}>
                              <Typography sx={{fontSize:"18px",fontFamily:"'Public Sans', sans-serif",textAlign:{lg:"start",md:"start",xs:"center"}}}>If appropriate, reach out via phone to introduce yourself and discuss </Typography>
                              <Typography sx={{fontSize:"18px",fontFamily:"'Public Sans', sans-serif",textAlign:{lg:"start",md:"start",xs:"center"}}}>potential opportunities.</Typography>
                          </Box>
                        </Box>
                        <Box>
                          <Grid item xs={12} container>
                                <Grid item xs={12} md={6} lg={6} py={0} display={"flex"} justifyContent={"center"}>
                                    <Box>
                                      <Box display={"flex"} gap={2} alignItems={"center"} py={3}>
                                           <Typography sx={{backgroundColor:"#21324D",borderRadius:"50px",display:"flex",alignItems:"center",width:"50px",height:"50px",justifyContent:"center"}}><img src={call} alt="" /></Typography>
                                         <Box>
                                             <Typography sx={{fontSize:"18px",fontFamily:"'Public Sans', sans-serif",fontWeight:"600",color:"black"}}>Phone</Typography>
                                             <Typography sx={{color:"#808080",fontSize:"16px",fontFamily:"'Prompt', sans-serif"}}>+91 63527 79246</Typography>
                                         </Box>
                                      </Box>
                                      <Box display={"flex"} gap={2} alignItems={"center"} py={3}>
                                           <Typography sx={{backgroundColor:"#21324D",borderRadius:"50px",display:"flex",alignItems:"center",width:"50px",height:"50px",justifyContent:"center"}}><img src={map} alt="" /></Typography>
                                         <Box>
                                             <Typography sx={{fontSize:"18px",fontFamily:"'Public Sans', sans-serif",fontWeight:"600",color:"black"}}>Address</Typography>
                                             <Typography sx={{color:"#808080",fontSize:"16px",fontFamily:"'Prompt', sans-serif"}}>Surat, India</Typography>
                                         </Box>
                                      </Box>
                                      <Box display={"flex"} gap={2} alignItems={"center"} py={3}>
                                           <Typography sx={{backgroundColor:"#21324D",borderRadius:"50px",display:"flex",alignItems:"center",width:"50px",height:"50px",justifyContent:"center"}}><img src={mart} alt="" /></Typography>
                                         <Box>
                                             <Typography sx={{fontSize:"18px",fontFamily:"'Public Sans', sans-serif",fontWeight:"600",color:"black"}}>India mart</Typography>
                                             <Typography sx={{color:"#808080",fontSize:"16px",fontFamily:"'Prompt', sans-serif"}}>tetimir664@konetas.com</Typography>
                                         </Box>
                                      </Box>
                                      <Box display={"flex"} gap={2} alignItems={"center"} py={3}>
                                           <Typography sx={{backgroundColor:"#21324D",borderRadius:"50px",display:"flex",alignItems:"center",width:"50px",height:"50px",justifyContent:"center"}}><img src={epc} alt="" /></Typography>
                                         <Box>
                                             <Typography sx={{fontSize:"18px",fontFamily:"'Public Sans', sans-serif",fontWeight:"600",color:"black"}}>EPC</Typography>
                                             <Typography sx={{color:"#808080",fontSize:"16px",fontFamily:"'Prompt', sans-serif"}}>tetimir664@konetas.com</Typography>
                                         </Box>
                                      </Box>
                                      <Box display={"flex"} gap={2} alignItems={"center"} py={3}>
                                           <Typography sx={{backgroundColor:"#21324D",borderRadius:"50px",display:"flex",alignItems:"center",width:"50px",height:"50px",justifyContent:"center"}}><img src={dollar} alt="" /></Typography>
                                         <Box>
                                             <Typography sx={{fontSize:"18px",fontFamily:"'Public Sans', sans-serif",fontWeight:"600",color:"black"}}>The Dollar Business</Typography>
                                             <Typography sx={{color:"#808080",fontSize:"16px",fontFamily:"'Prompt', sans-serif"}}>tetimir664@konetas.com</Typography>
                                         </Box>
                                      </Box>
                                      </Box>
                                </Grid>
                                <Grid item xs={12} md={6} lg={6} py={0} display={"flex"} justifyContent={"center"}>
                                     <Box>
                                     <Box display={"flex"} gap={2} alignItems={"center"} py={3}>
                                           <Typography sx={{backgroundColor:"#21324D",borderRadius:"50px",display:"flex",alignItems:"center",width:"50px",height:"50px",justifyContent:"center"}}><img src={mail} alt="" /></Typography>
                                         <Box>
                                             <Typography sx={{fontSize:"18px",fontFamily:"'Public Sans', sans-serif",fontWeight:"600",color:"black"}}>Mail</Typography>
                                             <Typography sx={{color:"#808080",fontSize:"16px",fontFamily:"'Prompt', sans-serif"}}>tetimir664@konetas.com</Typography>
                                         </Box>
                                      </Box>
                                      <Box display={"flex"} gap={2} alignItems={"center"} py={3}>
                                           <Typography sx={{backgroundColor:"#21324D",borderRadius:"50px",display:"flex",alignItems:"center",width:"50px",height:"50px",justifyContent:"center"}}><img src={insta} alt="" /></Typography>
                                         <Box>
                                             <Typography sx={{fontSize:"18px",fontFamily:"'Public Sans', sans-serif",fontWeight:"600",color:"black"}}>Instagram</Typography>
                                             <Typography sx={{color:"#808080",fontSize:"16px",fontFamily:"'Prompt', sans-serif"}}>tetimir664@konetas.com</Typography>
                                         </Box>
                                      </Box>
                                      <Box display={"flex"} gap={2} alignItems={"center"} py={3}>
                                           <Typography sx={{backgroundColor:"#21324D",borderRadius:"50px",display:"flex",alignItems:"center",width:"50px",height:"50px",justifyContent:"center"}}><img src={trade} alt="" /></Typography>
                                         <Box>
                                             <Typography sx={{fontSize:"18px",fontFamily:"'Public Sans', sans-serif",fontWeight:"600",color:"black"}}>Trade India</Typography>
                                             <Typography sx={{color:"#808080",fontSize:"16px",fontFamily:"'Prompt', sans-serif"}}>tetimir664@konetas.com</Typography>
                                         </Box>
                                      </Box>
                                      <Box display={"flex"} gap={2} alignItems={"center"} py={3}>
                                           <Typography sx={{backgroundColor:"#21324D",borderRadius:"50px",display:"flex",alignItems:"center",width:"50px",height:"50px",justifyContent:"center"}}><img src={embassy} alt="" /></Typography>
                                         <Box>
                                             <Typography sx={{fontSize:"18px",fontFamily:"'Public Sans', sans-serif",fontWeight:"600",color:"black"}}>Indian embassy</Typography>
                                             <Typography sx={{color:"#808080",fontSize:"16px",fontFamily:"'Prompt', sans-serif"}}>tetimir664@konetas.com</Typography>
                                         </Box>
                                      </Box>
                                     </Box>
                                </Grid>                               
                          </Grid>
                        </Box>
                   </Grid>
              </Grid>
              <Box py={10}>
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1859.7252592602647!2d72.88762253883696!3d21.213976445572776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f155c0ad929%3A0x97b93382aed70c3a!2sJBS%20IT%20Institute!5e0!3m2!1sen!2sin!4v1725965968466!5m2!1sen!2sin" width="100%" height="650" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </Box>
        </Container>
    </Box>
  );
}

export default Inquiry;
