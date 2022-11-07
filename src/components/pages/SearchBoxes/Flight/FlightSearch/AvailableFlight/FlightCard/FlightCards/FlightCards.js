import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar, Box, Button, Divider, Grid } from '@mui/material';
import RefundAndBaggage from '../RefundAndBaggage/RefundAndBaggage';
import ShareIcon from '@mui/icons-material/Share';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton { ...other } />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const FlightCards = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Box>
            <Card sx={ {} }>
                <CardContent>
                    <Grid container spacing={ 2 } sx={ {
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        py: { xs: 3, sm: 3, md: 0, lg: 0 }
                    } } >
                        <Grid item xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                            <Grid container sx={ {
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                // maxWidth: '110px',
                                // border: '1px solid rgba(166, 166, 175, 0.40)',
                                // lineHeight: '60px',
                                // height: '50px',
                                p: 0.5,
                                "&:hover": {
                                    // border: '1px solid #333',
                                }
                            } }>
                                <Grid item xs={ 3 }>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" variant="square" sx={ {} } />
                                </Grid>
                                <Grid item xs={ 9 }>
                                    <Typography variant="body1" gutterBottom component="div" sx={ { p: 0, m: 0 } }>
                                        DAC 07:45
                                    </Typography>
                                    <Typography variant="caption" gutterBottom component="div" sx={ { p: 0, m: 0 } }>
                                        Hazrat Shahjalal Internati...
                                    </Typography>
                                    <Typography variant="caption" gutterBottom component="div" sx={ { p: 0, m: 0 } }>
                                        2nd Jun 2022
                                    </Typography>
                                </Grid>

                            </Grid>
                        </Grid>
                        <Grid item xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                            <Grid container sx={ {
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                // maxWidth: '110px',
                                // border: '1px solid rgba(166, 166, 175, 0.40)',
                                // lineHeight: '60px',
                                // height: '50px',
                                p: 0.5,
                                "&:hover": {
                                    // border: '1px solid #333',
                                }
                            } }>
                                <Grid item xs={ 3 }>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" variant="square" sx={ {} } />
                                </Grid>
                                <Grid item xs={ 9 }>
                                    <Typography variant="body1" gutterBottom component="div" sx={ { p: 0, m: 0 } }>
                                        DAC 07:45
                                    </Typography>
                                    <Typography variant="caption" gutterBottom component="div" sx={ { p: 0, m: 0 } }>
                                        Hazrat Shahjalal Internati...
                                    </Typography>
                                    <Typography variant="caption" gutterBottom component="div" sx={ { p: 0, m: 0 } }>
                                        2nd Jun 2022
                                    </Typography>
                                </Grid>

                            </Grid>

                        </Grid>
                        <Grid item xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                            <Grid container sx={ {
                                // display: 'flex',
                                // justifyContent: 'flex-start',
                                // alignItems: 'center',
                                // maxWidth: '110px',
                                // border: '1px solid rgba(166, 166, 175, 0.40)',
                                // lineHeight: '60px',
                                // height: '50px',
                                background: 'rgba(166, 166, 175, 0.40)',
                                py: 5,
                                "&:hover": {
                                    // border: '1px solid #333',
                                }
                            } }>
                                <Grid item xs={ 3 }>
                                    {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" variant="square" sx={ {} } /> */ }
                                </Grid>
                                <Grid item xs={ 9 }>
                                    <Typography variant="caption" gutterBottom component="div" sx={ { p: 0, m: 0 } }>
                                        Refundable
                                    </Typography>
                                    <Typography variant="h5" gutterBottom component="div" sx={ { p: 0, m: 0 } }>
                                        BDT 5,122
                                    </Typography>
                                    <Typography variant="h6" gutterBottom component="div" sx={ { p: 0, m: 0 } }>
                                        <s>BDT 5,452 </s>
                                    </Typography>
                                    <Button variant="contained">Book Now</Button>
                                </Grid>

                            </Grid>

                        </Grid>

                    </Grid>
                    <Divider />
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <ExpandMore
                        expand={ expanded }
                        onClick={ handleExpandClick }
                        aria-expanded={ expanded }
                        aria-label="show more"
                    >

                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={ expanded } timeout="auto" unmountOnExit>
                    <CardContent>
                        <Grid container rowSpacing={ 1 } columnSpacing={ { xs: 1, sm: 2, md: 3 } }>
                            <Grid item xs={ 12 } sm={ 12 } md={ 7 } lg={ 7 }>
                                <Button variant="contained">DAC - CXB</Button>
                                <Grid sx={ {
                                    display: 'flex',
                                    justifyContent: 'left',
                                    alignItems: 'center',
                                    py: 3
                                } }>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="/static/images/avatar/1.jpg"
                                        sx={ { width: 24, height: 24 } }
                                    />
                                    <Typography variant="caption" display="block" gutterBottom sx={ {
                                        px: 3
                                    } }>
                                        Biman Bangladesh Airlines
                                    </Typography>
                                    <Typography variant="caption" display="block" gutterBottom sx={ {
                                        px: 3
                                    } }>
                                        BG435
                                    </Typography>
                                    <Typography variant="overline" display="block" gutterBottom>
                                        BOEING 737-800 - 738
                                    </Typography>

                                </Grid>
                                <Grid container spacing={ 0 } sx={ {
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                } }>
                                    <Grid item xs={ 5 }>
                                        <Typography variant="h6" display="block" gutterBottom sx={ {

                                        } }>
                                            DAC <span> 15:00</span>
                                        </Typography>
                                        <Typography variant="caption" display="block" gutterBottom sx={ {

                                        } }>
                                            Hazrat Shahjalal International Airport
                                        </Typography>
                                        <Typography variant="caption" display="block" gutterBottom sx={ {

                                        } }>
                                            3rd Jun 2022
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={ 2 }><Typography variant="caption" display="block" gutterBottom sx={ {

                                    } }>
                                        01h 15m
                                    </Typography>

                                    </Grid>
                                    <Grid item xs={ 5 }>
                                        <Typography variant="h6" display="block" gutterBottom sx={ {

                                        } }>
                                            DAC <span> 15:00</span>
                                        </Typography>
                                        <Typography variant="caption" display="block" gutterBottom sx={ {
                                        } }>
                                            Hazrat Shahjalal International Airport
                                        </Typography>
                                        <Typography variant="caption" display="block" gutterBottom sx={ {
                                        } }>
                                            3rd Jun 2022
                                        </Typography>

                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={ 12 } sm={ 12 } md={ 5 } lg={ 5 }>
                                <RefundAndBaggage />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Collapse>
            </Card>
        </Box>
    );
};

export default FlightCards;