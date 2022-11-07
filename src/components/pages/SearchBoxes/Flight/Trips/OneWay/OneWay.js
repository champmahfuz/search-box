import React from 'react';
import Grid from '@mui/material/Grid';

// Autocomplete field 
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import FlyingFrom from '../../SearchElements/FlyingFrom';
import FlyingTo from '../../SearchElements/FlyingTo';
import Calender from '../../SearchElements/Calender';
import PassengerAndClasses from '../../SearchElements/PassengerAndClasses';
import { Link, NavLink } from 'react-router-dom';


const linkStyle = {
    marginTop: '17px',
    padding: '10px 15px',
    color: '#fff',
    border: '1px solid #333',
    fontWeight: 'bold',
    textDecoration: "none",
    boxShadow: `rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset`,
    '&:hover': {
        boxShadow: `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`,
        border: '1px solid #333',
        color: '#333',
    },

};

const OneWay = () => {


    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} sm={6} md={3}>
                        {/* From Flying From  */}
                        <FlyingFrom />

                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        {/* From Flying To  */}
                        <FlyingTo />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        {/* From Flying Calender  */}
                        <Calender />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        {/* From Flying Calender  */}
                        <PassengerAndClasses />

                    </Grid>
                </Grid>
                <Grid item sm={12}
                    sx={{ textAlign: "center", py: 6 }}>
                    <Link to={`/FlightSearchs`}

                        onclick="location.href='/FlightSearchs'"
                        variant="outlined" style={linkStyle}>
                        Search Flights
                    </Link >
                </Grid>
            </Box>
        </div>
    );
};


export default OneWay;

// import React from 'react';
// import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import PlaylistAddCheckCircleIcon from '@mui/icons-material/PlaylistAddCheckCircle';
// import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
// import InsertPageBreakIcon from '@mui/icons-material/InsertPageBreak';
// import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
// import DarkModeIcon from '@mui/icons-material/DarkMode';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import WarningIcon from '@mui/icons-material/Warning';
// import { Box, Button, Checkbox, Divider, Typography } from '@mui/material';

// const OneWay = () => {
//     return (
//         <Box sx={{ position: 'relative' }}>
//             <Box sx={{
//                 display: 'flex',
//                 justifyContent: 'center',
//                 width: '1000px',
//                 position: 'absolute',
//                 // marginLeft: '500px',
//                 // margin: '0 auto',
//                 zIndex: 2,
//                 marginTop: '-50px',
//                 gap: '10px',
//             }}>
//                 <Box sx={{
//                     width: '80px',
//                     height: '70px',
//                     justifyContent: 'center',
//                     background: 'rgba(255, 255, 255, 0.7)',
//                     borderRadius: ' 5px',
//                     color: '#fff',
//                     p: 3,
//                     backdropFilter: 'blur(5.5px)',

//                 }}>
//                     <AirplanemodeActiveIcon sx={{ marginTop: '-30px', marginLeft: '3px', color: '#212121', justifyContent: 'center' }} />
//                     <Typography sx={{ marginLeft: '-8px', marginTop: '-10px', color: '#212121' }}>Flights</Typography>
//                 </Box >
//                 <Box sx={{
//                     width: '80px',
//                     height: '70px',
//                     background: 'rgba(255, 255, 255, 0.7)',
//                     borderRadius: ' 5px',
//                     color: '#fff',
//                     p: 3,
//                     backdropFilter: 'blur(5.5px)',

//                 }}>
//                     <InsertPageBreakIcon sx={{ marginLeft: '3px', marginTop: '-30px', color: '#212121' }} />
//                     <Typography sx={{ color: '#212121', marginTop: '-10px' }}>Visa</Typography>
//                 </Box >
//                 <Box sx={{
//                     width: '80px',
//                     height: '70px',
//                     background: 'rgba(255, 255, 255, 0.7)',
//                     borderRadius: ' 5px',
//                     // alignItems: 'center',
//                     color: '#fff',
//                     p: 3,
//                     backdropFilter: 'blur(5.5px)',

//                 }}>
//                     <HolidayVillageIcon sx={{ marginLeft: '3px', marginTop: '-30px', color: '#212121' }} />
//                     <Typography sx={{ marginLeft: '-12px', color: '#212121', marginTop: '-10px' }}>Holidays</Typography>
//                 </Box >
//                 <Box sx={{
//                     width: '80px',
//                     height: '70px',
//                     background: 'rgba(255, 255, 255, 0.7)',
//                     borderRadius: ' 5px',
//                     // alignItems: 'center',
//                     color: '#fff',
//                     p: 3,
//                     backdropFilter: 'blur(5.5px)',

//                 }}>
//                     <DarkModeIcon sx={{ marginLeft: '3px', marginTop: '-30px', color: '#212121' }} />
//                     <Typography sx={{ color: '#212121', marginTop: '-10px', marginLeft: '-10px' }}>Umrah</Typography>
//                 </Box >
//                 <Box sx={{
//                     width: '80px',
//                     height: '70px',
//                     background: 'rgba(255, 255, 255, 0.7)',
//                     borderRadius: ' 5px',
//                     // alignItems: 'center',
//                     color: '#fff',
//                     p: 3,
//                     backdropFilter: 'blur(5.5px)',

//                 }}>
//                     <MoreHorizIcon sx={{ marginLeft: '3px', marginTop: '-30px', color: '#212121' }} />
//                     <Typography sx={{ color: '#212121', marginTop: '-10px' }}>More</Typography>
//                 </Box >
//             </Box>
//             <Box sx={{
//                 width: '100%',
//                 background: 'rgba(255, 255, 255, 0.7)',
//                 borderRadius: ' 5px',
//                 // alignItems: 'center',
//                 color: '#fff',
//                 p: 3,
//                 zIndex: -1,
//                 position: 'absolute',
//                 backdropFilter: 'blur(5.5px)',

//             }}>
//                 <Box
//                     sx={{
//                         display: 'flex',
//                         justifyContent: 'space-between'
//                     }}
//                 >
//                     <Box
//                         sx={{
//                             display: 'flex',
//                             justifyContent: 'space-around',
//                             gap: '10px'
//                         }}
//                     >
//                         <Box>
//                             <Typography sx={{ fontSize: '16px', color: '#212121' }}>
//                                 <PlaylistAddCheckCircleIcon />
//                                 One Way
//                             </Typography>
//                         </Box>
//                         <Box>
//                             <Typography sx={{ fontSize: '16px', color: '#212121' }}>
//                                 <PlaylistAddCheckCircleIcon />
//                                 Round Trip
//                             </Typography>
//                         </Box>
//                         <Box>
//                             <Typography sx={{ fontSize: '16px', color: '#212121' }}>
//                                 <PlaylistAddCheckCircleIcon />
//                                 Multi City
//                             </Typography>
//                         </Box>
//                     </Box>

//                     <Box>
//                         <Typography sx={{ fontSize: '1.8rem', color: '#212121', marginTop: '-5px' }}> Book Flight Tickets</Typography>
//                     </Box>
//                 </Box>
//                 <Divider
//                     sx={{ color: 'black' }}
//                 />
//                 <Box sx={{
//                     display: 'flex',
//                     // flexDirection: 'row',
//                     // justifyContent: 'space-between',
//                     width: '100%'

//                 }}>
//                     <Box sx={{
//                         display: 'flex',
//                         // flexDirection: 'row-reverse',
//                         width: '40%',
//                         // gap: '20px'
//                     }}>
//                         <Box sx={{
//                             borderRight: '1px solid black', padding: '10px'
//                         }}>
//                             <Typography sx={{ fontSize: '14px', color: '#212121' }}>
//                                 FROM
//                             </Typography>
//                             <Typography sx={{ fontSize: '2rem', color: '#212121', fontWeight: 'bolder' }}>
//                                 Dhaka
//                             </Typography>
//                             <Typography sx={{ fontSize: '10px', color: '#212121' }}>
//                                 Go: Shalajal International Airport
//                             </Typography>
//                         </Box>
//                         <Box
//                             sx={{
//                                 borderRight: '1px solid black', padding: '10px'
//                             }}
//                         >
//                             <Typography sx={{ fontSize: '14px', color: '#212121' }}>
//                                 TO
//                             </Typography>
//                             <Typography sx={{ fontSize: '2rem', color: '#212121', fontWeight: 'bolder' }}>
//                                 Chattogram
//                             </Typography>
//                             <Typography sx={{ fontSize: '10px', color: '#212121' }}>
//                                 BOM: Sah Amanot Internetional Airport
//                             </Typography>
//                         </Box>
//                     </Box>
//                     <Box
//                         sx={{
//                             display: 'flex',
//                             width: '60%',
//                             // gap: '20px',

//                         }}
//                     >
//                         <Box sx={{
//                             borderRight: '1px solid black', padding: '10px'
//                         }}>
//                             <Typography sx={{ fontSize: '14px', color: '#212121' }}>
//                                 <CalendarMonthIcon />
//                                 Depart
//                                 <KeyboardArrowDownIcon />
//                             </Typography>
//                             <Box sx={{ display: 'flex' }}>
//                                 <Typography sx={{ fontSize: '2rem', color: '#212121', fontWeight: 'bolder' }}>02</Typography>
//                                 <Typography sx={{ marginTop: '16px', color: '#212121' }}>Oct'22</Typography>

//                             </Box>
//                             <Typography sx={{ color: '#212121', fontSize: '14px' }}>Sunday</Typography>
//                         </Box>
//                         <Box sx={{
//                             borderRight: '1px solid black', padding: '10px'
//                         }}>
//                             <Typography sx={{ fontSize: '14px', color: '#212121' }}
//                             > <CalendarMonthIcon />
//                                 Return
//                                 <KeyboardArrowDownIcon />
//                             </Typography>
//                             <br />
//                             <Typography sx={{ fontSize: '13px', fontWeight: 'bolder', color: '#263238' }}>Book a round trip to save more</Typography>
//                         </Box>
//                         <Box sx={{ padding: '10px' }}>
//                             <Typography sx={{ fontSize: '13px', color: '#212121' }}>
//                                 TRAVELLERS
//                             </Typography>
//                             <Box sx={{ display: 'flex' }}>
//                                 <Typography sx={{ fontSize: '2rem', color: '#212121', fontWeight: 'bolder' }}>1</Typography>
//                                 <Typography sx={{ marginTop: '16px', color: '#212121' }}>Travellers</Typography>
//                             </Box>
//                             <Typography sx={{ color: '#212121', fontSize: '14px' }}>Economy</Typography>
//                         </Box>
//                         <Box>
//                             <Button
//                                 sx={{ fontSize: '30px', marginTop: '40px', marginLeft: '40px' }}
//                                 variant="contained" color="error">
//                                 <Typography sx={{ fontSize: '15px' }} > Search Flights</Typography>
//                             </Button>

//                         </Box>
//                     </Box>
//                 </Box>
//                 <Divider
//                     sx={{ color: 'black' }}
//                 />

//                 <Box
//                     sx={{
//                         display: 'flex',
//                         justifyContent: 'space-between',
//                         marginTop: '20px',
//                     }}
//                 >
//                     <Box
//                         sx={{
//                             display: 'flex',
//                             justifyContent: 'space-around',
//                             gap: '10px'
//                         }}
//                     >
//                         <Box sx={{ borderRight: '1px solid black', paddingRight: '10px' }}>
//                             <Typography
//                                 sx={{
//                                     fontSize: '14px',
//                                     color: '#212121',
//                                     marginTop: '10px',
//                                     cursor: 'pointer'
//                                 }}
//                             >
//                                 <PlayCircleFilledRoundedIcon sx={{ color: '#4527a0' }} />
//                                 Fares From</Typography>
//                         </Box>
//                         <Box sx={{ borderRight: '1px solid black', paddingRight: '10px' }}>
//                             <Typography
//                                 sx={{
//                                     fontSize: '14px',
//                                     color: '#212121',
//                                     cursor: 'pointer'
//                                 }}
//                             >
//                                 <Checkbox defaultChecked color="success" />
//                                 Direct Flights</Typography>
//                         </Box>
//                         <Box>
//                             <Typography
//                                 sx={{
//                                     fontSize: '14px',
//                                     color: '#212121',
//                                     cursor: 'pointer'
//                                 }}
//                             >
//                                 <Checkbox defaultChecked color="success" />
//                                 Defense Fare</Typography>
//                         </Box>
//                     </Box>

//                     <Box>
//                         <Typography
//                             sx={{
//                                 color: '#f44336',
//                                 marginTop: '10px',
//                                 cursor: 'pointer'
//                             }}
//                         >
//                             <WarningIcon />
//                             Covid 19 update</Typography>
//                     </Box>
//                 </Box>
//             </Box >
//         </Box >
//     );
// };

// export default OneWay;