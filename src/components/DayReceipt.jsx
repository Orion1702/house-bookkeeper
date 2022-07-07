import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { totalArrayPrice } from "../hooks/shortFunction";
import ShopReceipt from "./ShopReceipt";

const DayReceipt = ({day, dayData}) => {
    // const filteredData = useSelector(state => state.filteredData);
    // const dayData = filteredData.filter(el => el.date == day)
    const shopArray = [...new Set(dayData.map(el => el.shop))]
    
    return (
        <div className="DayReceipt">
            <div className="DayReceipt__title">
                <Typography variant="h5" component="h3">{day}</Typography>
                <Typography variant="h5" component="h3">{totalArrayPrice(dayData)}</Typography>
            </div>
           <div>
                {shopArray.map((shop, i) => 
                    <ShopReceipt key={shop + i} shopName={shop} day={day} checkData={dayData.filter(el => el.shop == shop)} />
                )}
           </div>
        </div>
    )
}

export default DayReceipt;