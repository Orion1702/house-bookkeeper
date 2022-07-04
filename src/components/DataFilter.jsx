import { DatePicker } from "@mui/lab";
import { Stack, TextField } from "@mui/material";
import React, { Fragment, useState } from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const DataFilter = ({filter, setFilter}) => {
    const [dataSelect, setDataSelect] = useState()
    console.log('dataSelect')
    console.log(dataSelect)
    return(
        <div>
            <Stack>
                <DatePicker 
                    label='Date Picker' 
                    renderInput={(params) => <TextField {...params} />} 
                    value={dataSelect}
                    onChange={(newValue) => setDataSelect(newValue)}
                />
                
            </Stack>

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
            />
        </div>
    )
}

export default DataFilter;