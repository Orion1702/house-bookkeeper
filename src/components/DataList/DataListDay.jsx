import { Typography } from "@mui/material";
import React from "react";
import { totalArrayPrice } from "../../hooks/utils/shortFunction";
import DataListDayShop from "./DataListDayShop";

const DataListDay = ({day, dayData}) => {
    const shopArray = [...new Set(dayData.map(el => el.shop))]
    
    return (
        <div className="DayReceipt">
            <div className="DayReceipt__title">
                <Typography variant="h5" component="div">{day}</Typography>
                <Typography variant="h5" component="div">{totalArrayPrice(dayData)}</Typography>
            </div>
            
            {shopArray.map((shop, i) => 
                <DataListDayShop key={shop + i} shopName={shop} day={day} shopData={dayData.filter(el => el.shop == shop)} />
            )}
        </div>
    )
}

export default DataListDay;