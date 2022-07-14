import React, { useState } from "react";
import { Tab, Typography, Box, Tabs } from "@mui/material";
import PropTypes from 'prop-types';
import DataTabsDay from "./DataTabsDay";

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
            <Typography variant={"body1"} component={'div'}>{children}</Typography>
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

const DataListTabs = ({daysArray, posts}) => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <Box sx={{ flexGrow: 1, display: 'flex'}}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider',  maxHeight: 480, minWidth: 90 }}
            >
                {daysArray.map((day, dayIndex) =>
                    <Tab key={'tab'+ dayIndex} label={day} {...a11yProps(dayIndex)} />
                )}
            </Tabs>

            {daysArray.map((day, dayIndex) =>
                <TabPanel 
                    className={'TabPanel_of_DayReceipt'} 
                    key={'TabPanel' + dayIndex}
                    value={value} 
                    index={dayIndex} 
                    style={{width: '100%'}}
                    component='div'
                >
                    <DataTabsDay key={day} day={day} dayData={posts.filter(el => el.date == day)} />
                </TabPanel>
            )}
        </Box>
    )
}

export default DataListTabs;