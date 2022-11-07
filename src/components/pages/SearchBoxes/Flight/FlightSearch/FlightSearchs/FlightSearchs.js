import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import Footer from '../../../../Shared/Footer/Footer';
import Navigation from '../../../../Shared/Navigation/Navigation';
import AvailableFlights from '../AvailableFlight/AvailableFlights/AvailableFlights';
import FlightCards from '../AvailableFlight/FlightCard/FlightCards/FlightCards';
import SearchSidebar from '../SearchSidebar/SearchSidebars/SearchSidebar';

const FlightSearchs = () => {
    return (
        <Box>
            <Navigation />
            <Container>
                <Grid container spacing={ 2 } sx={ {
                    py: 7
                } }>
                    <Grid item xs={ 12 } sm={ 12 } md={ 3 } lg={ 3 }>
                        <SearchSidebar />
                    </Grid>
                    <Grid item xs={ 12 } sm={ 12 } md={ 9 } lg={ 9 }>
                        <AvailableFlights />
                        <FlightCards />
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </Box>
    );
};

export default FlightSearchs;