import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { totalArrayPrice } from "../hooks/utils/shortFunction";
import ShopReceipt from "./ShopReceipt";

const DayReceipt = ({day, dayData}) => {
    // const filteredData = useSelector(state => state.filteredData);
    // const dayData = filteredData.filter(el => el.date == day)
    const shopArray = [...new Set(dayData.map(el => el.shop))]
    
    return (
        <div className="DayReceipt">
            <div className="DayReceipt__title">
                <Typography variant="h5" component="div">{day}</Typography>
                <Typography variant="h5" component="div">{totalArrayPrice(dayData)}</Typography>
            </div>
            
            {shopArray.map((shop, i) => 
                <ShopReceipt key={shop + i} shopName={shop} day={day} checkData={dayData.filter(el => el.shop == shop)} />
            )}
        </div>
    )
}

export default DayReceipt;