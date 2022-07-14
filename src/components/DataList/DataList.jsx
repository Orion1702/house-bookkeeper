import React from "react";
import { totalArrayPrice } from "../../hooks/utils/shortFunction";
import { Box, Typography } from "@mui/material";
import DataListDay from "./DataListDay";


const DataList = ({daysArray, posts}) => {

    return(
        <>
            {daysArray.map( (day, dayIndex) => 
                <Box key={'DataList' + dayIndex}>
                    <DataListDay key={day} day={day} dayData={posts.filter(el => el.date == day)} />
                </Box>
            )}
        </>
    )
}

export default DataList;