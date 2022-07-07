import { Box, Divider, Paper, Typography } from "@mui/material";
import React from "react";
import { totalArrayPrice } from "../hooks/shortFunction";

const ShopReceipt = ({day, shopName, checkData}) => {

    return (
        <Box className="ShopReceipt" sx={{mb: 2}}>
            <div>
            <div className="ShopReceipt__title">
                <Typography  variant="h6" component="h5">{shopName}</Typography>
                <Typography  variant="h6" component="h5">{totalArrayPrice(checkData)}</Typography>
            </div>
            <Divider></Divider>

            </div>
            
            {checkData.map((el, i) => 
                <div key={day + shopName + i} style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <div>
                        {el.name}
                    </div>
                    <div>{el.finalPrice.toFixed(2)}</div>
                </div>
            )}
        </Box>
    )
}

export default ShopReceipt;