import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const Footer = ({dataLength}) => {
    return (
        <Box className="footer">
            <Container sx={{mt: 2}} maxWidth="md">

                        <Typography variant="h6" color="inherit" component="div">
                            Bookkeeper
                        </Typography>

                        <Typography variant="body2" gutterBottom component="div">
                            Total data time: 
                        </Typography>
                        <Typography variant="body2" gutterBottom component="div">
                            Total products line time:  {dataLength}
                        </Typography>

            </Container>
        </Box>
    )
}

export default Footer;