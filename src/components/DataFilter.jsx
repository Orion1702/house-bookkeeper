import { DatePicker } from "@mui/lab";
import React, { Fragment, useState } from "react";
import {Box, TextField, InputAdornment, Stack, ButtonGroup, Button} from '@mui/material/';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { dateChanger } from "../hooks/utils/shortFunction";

const DataFilter = ({filter, setFilter}) => {

    return(
        <Box sm={{p: 2, mb: 2,}}>

            <Stack direction="row" spacing={2}>
                <Box className="datePicker__group">
                    <DatePicker 
                        label='Date From' 
                        renderInput={(params) => <TextField {...params} />} 
                        value={filter.dateFrom}
                        onChange={(newValue) => setFilter({...filter, dateFrom: newValue.toISOString().slice(0, 10)})}
                    />
                    <ButtonGroup
                        orientation="vertical"
                        aria-label="vertical outlined button group"
                    >
                        <Button 
                            key="dateFromUp"
                            onClick={() => setFilter({...filter, dateFrom: dateChanger(filter.dateFrom, 1)})}
                        ><KeyboardArrowUpIcon/></Button>
                        <Button 
                            key="dateFromDown"
                            onClick={() => setFilter({...filter, dateFrom: dateChanger(filter.dateFrom, -1)})}
                            ><KeyboardArrowDownIcon/></Button>
                    </ButtonGroup>
                </Box>

                <Box className="datePicker__group">
                    <DatePicker 
                        label='Date To' 
                        renderInput={(params) => <TextField {...params} />} 
                        value={filter.dateTo}
                        onChange={(newValue) => setFilter({...filter, dateTo: newValue.toISOString().slice(0, 10)})}
                    />
                    <ButtonGroup
                        orientation="vertical"
                        aria-label="vertical outlined button group"
                    >
                        <Button 
                            key="datetoUp"
                            onClick={() => setFilter({...filter, dateTo: dateChanger(filter.dateTo, 1)})}
                        ><KeyboardArrowUpIcon/></Button>
                        <Button 
                            key="dateToDown"
                            onClick={() => setFilter({...filter, dateTo: dateChanger(filter.dateTo, -1)})}
                        ><KeyboardArrowDownIcon/></Button>
                    </ButtonGroup>
                </Box>
                <TextField 
                    variant="standard"
                    // size="small"
                    label="Search field"
                    color="white"
                    sx={{mb: 1, width: '40%',}}
                    type="search"
                    value={filter.query}
                    onChange={(e) => setFilter({...filter, query: e.target.value})}

                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </Stack>
        </Box>
    )
}

export default DataFilter;