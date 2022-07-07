import { DatePicker } from "@mui/lab";
import { Box, Stack, TextField } from "@mui/material";
import React, { Fragment, useState } from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const DataFilter = ({filter, setFilter}) => {
    // const [dateFrom, setDateFrom] = useState()
    // const [dateTo, setDatrTo] = useState()
    // const handleChangeDateFrom = (e) => {

    // }

    return(
        <Box sm={{p: 2, mb: 2,}}>

            <Stack direction="row" spacing={2}>
                <DatePicker 
                    label='Date From' 
                    renderInput={(params) => <TextField {...params} />} 
                    value={filter.dateFrom}
                    onChange={(newValue) => setFilter({...filter, dateFrom: newValue})}
                />
                <DatePicker 
                    label='Date To' 
                    renderInput={(params) => <TextField {...params} />} 
                    value={filter.dateTo}
                    onChange={(newValue) => setFilter({...filter, dateTo: newValue})}
                />
            </Stack>

             {/*
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Поиск..."
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Сортировка"
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'},
                ]}
            /> */}
        </Box>
    )
}

export default DataFilter;