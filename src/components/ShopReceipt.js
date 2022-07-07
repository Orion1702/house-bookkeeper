import { Paper } from "@mui/material";
import React from "react";

const ShopReceipt = ({day, shopName, checkData}) => {

    return (
        
        <div>
            <b>{shopName}</b>
            
            {checkData.map((el, i) => 
                <div key={day + shopName + i} style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <div>
                        {el.name}
                    </div>
                    <div>{el.finalPrice.toFixed(2)}</div>
                </div>
            )}
            <hr />
            <div style={{textAlign: 'right', fontWeight: 'bold',}}>{checkData.reduce((accum, el) => { return accum + el.finalPrice;}, 0).toFixed(2)}</div>
        </div>
    )
}

export default ShopReceipt;