import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { dateDifference, Alice } from "../hooks/utils/dateDifference";

const Footer = ({dataLength, dateMinMax}) => {
    console.log(dateMinMax[0]);
    return (
        <Box className="footer">
            <Container sx={{mt: 2}} maxWidth="md">

                <Typography variant="h6" color="inherit" component="div">
                    Bookkeeper
                </Typography>

                <Typography variant="body2" gutterBottom component="div">
                    From {dateMinMax[0]} to {dateMinMax[1]} 
                </Typography>
                <Typography variant="caption" gutterBottom component="div">
                    {Alice(dateMinMax[0], dateMinMax[1])}
                </Typography>
                <Typography variant="body2" gutterBottom component="div">
                    Total products line time:  {dataLength}
                </Typography>

            </Container>
        </Box>
    )
}

export default Footer;