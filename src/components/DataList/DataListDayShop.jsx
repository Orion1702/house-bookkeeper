import { Typography } from "@mui/material";
import React from "react";
import { totalArrayPrice } from "../../hooks/utils/shortFunction";

const DataListDayShop = ({day, shopName, shopData}) => {
    
    return (
        <div className="DataListDayShop">
            <div className="ShopReceipt__title">
                <Typography  variant="h6" component="span">{shopName}</Typography>
                <Typography  variant="h6" component="span">{totalArrayPrice(shopData)}</Typography>
            </div>
            
            {shopData.map((el, i) => 
                <div key={day + shopName + i} style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <div>
                        {el.name}
                    </div>
                    <div>{el.finalPrice.toFixed(2)}</div>
                </div>
            )}
        </div>
    )
}

export default DataListDayShop;