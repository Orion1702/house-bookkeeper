import { AccordionActions, Box, Divider, Paper, Typography } from "@mui/material";
import React from "react";
import { totalArrayPrice } from "../hooks/shortFunction";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ShopReceipt = ({day, shopName, checkData}) => {

    return (

        <Accordion>

        {/* <Box className="ShopReceipt" sx={{mb: 2}}> */}
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={day+shopName}
                id={day+shopName}
                component="div"
                >
                <div className="ShopReceipt__title">
                    <Typography  variant="h6" component="span">{shopName}</Typography>
                    <Typography  variant="h6" component="span">{totalArrayPrice(checkData)}</Typography>
                </div>
            </AccordionSummary>
                {/* 
                
                */}

            
            <AccordionDetails>
                
                {checkData.map((el, i) => 
                    <div key={day + shopName + i} style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <div>
                            {el.name}
                        </div>
                        <div>{el.finalPrice.toFixed(2)}</div>
                    </div>
                )}
            </AccordionDetails>
        {/* </Box> */}
        </Accordion>

    )
}

export default ShopReceipt;