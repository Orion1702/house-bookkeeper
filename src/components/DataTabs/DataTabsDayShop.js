import React from "react";
import { totalArrayPrice } from "../../hooks/utils/shortFunction";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const DataTabsDayShop = ({day, shopName, checkData}) => {

    return (
        <Accordion>
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
        </Accordion>
    )
}

export default DataTabsDayShop;