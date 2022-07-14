import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { totalArrayPrice } from "../hooks/utils/shortFunction";
import { Typography, Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import DataTabs from "./DataTabs/DataTabs";
import DataList from "./DataList/DataList";
import DataTable from "./DataTable/DataTable";

const DataContainer = ({posts}) => {
    const dispatch = useDispatch();
    const [totalPriceCount, setTotalPriceCount] = useState(0);
    const [daysArray, setDaysArray] = useState([]);
    const [dataListTemplate, setDataListTemplate] = useState('tabs')

    useEffect(() => {
      setTotalPriceCount(totalArrayPrice(posts));
      setDaysArray([...new Set(posts.map(el => el.date))])
      dispatch({type: 'UPDATE_TOTALSPEND', payload: totalPriceCount})
    }, [posts])

    const dataListTemplateChanger = (e, value) => {
      setDataListTemplate(value)
    }
    
    return (
        <div>
            <Box sx={{ p: 2, mb: 2, flexGrow: 1, display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h4" component="h1">Total mount</Typography>
                <Typography variant="h4" component="h1">{totalPriceCount}</Typography>
            </Box>

            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end',}} >
              <ToggleButtonGroup
                size="small"
                color="primary"
                value={dataListTemplate}
                exclusive
                onChange={dataListTemplateChanger}
              >
                <ToggleButton value="tabs">Tabs</ToggleButton>
                <ToggleButton value="table">Table</ToggleButton>
              </ToggleButtonGroup>
            </Box>

            {dataListTemplate == 'tabs' ?
              <DataTabs posts={posts} daysArray={daysArray}/>
              :
              <DataTable posts={posts}/>
            }
        </div>
    )
}

export default DataContainer;