import React, { useEffect, useState } from "react";
import DayReceipt from "./DayReceipt";

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { totalArrayPrice } from "../hooks/shortFunction";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }


const DataList = ({posts}) => {
    const totalPriceCount = totalArrayPrice(posts);
    const daysArray = [...new Set(posts.map(el => el.date))];
    console.log(daysArray.sort((a, b) => a.localeCompare(b)));

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    return (
        <div>
            <Box
                sx={{ p: 2, mb: 2, flexGrow: 1, /* bgcolor: 'background.paper',*/  display: 'flex', justifyContent: 'space-between' }}
            >
                <Typography variant="h4" component="h1">Total mount</Typography>
                <Typography variant="h4" component="h1">{totalPriceCount}</Typography>
            </Box>

            <Box
                sx={{ flexGrow: 1, /* bgcolor: 'background.paper', */ display: 'flex'}}
                >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider',  maxHeight: 480, minWidth: 90 }}
                >
                    {daysArray.map((day, dayIndex) =>
                        <Tab label={day} {...a11yProps(dayIndex)} />
                    )}
                </Tabs>

                {daysArray.map((day, dayIndex) =>
                    <TabPanel value={value} index={dayIndex} style={{width: '100%'}}>
                        <DayReceipt key={day} day={day} dayData={posts.filter(el => el.date == day)} />
                    </TabPanel>
                )}
            </Box>
        </div>
    )
}

export default DataList;