import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ShopReceipt from "./ShopReceipt";

const DayReceipt = ({day, dayData}) => {
    // const filteredData = useSelector(state => state.filteredData);
    // const dayData = filteredData.filter(el => el.date == day)
    const shopArray = [...new Set(dayData.map(el => el.shop))]
    
    return (
        <div cla>
            <div className="day__title">
                <div>{day}</div>
                <div>{day}</div>
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