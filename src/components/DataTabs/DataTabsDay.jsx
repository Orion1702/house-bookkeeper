import { Typography } from "@mui/material";
import React from "react";
import { totalArrayPrice } from "../../hooks/utils/shortFunction";
import DataTabsDayShop from "./DataTabsDayShop";

const DataTabsDay = ({day, dayData}) => {
    const shopArray = [...new Set(dayData.map(el => el.shop))]
    
    return (
        <div className="DayReceipt">
            <div className="DayReceipt__title">
                <Typography variant="h5" component="div">{day}</Typography>
                <Typography variant="h5" component="div">{totalArrayPrice(dayData)}</Typography>
            </div>
            
            {shopArray.map((shop, i) => 
                <DataTabsDayShop key={shop + i} shopName={shop} day={day} checkData={dayData.filter(el => el.shop == shop)} />
            )}
        </div>
    )
}

export default DataTabsDay;