import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    // { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'Name',
        headerName: 'First name',
        width: 200,
        editable: true,
    },
    {
        field: 'Shop',
        headerName: 'Shop',
        width: 150,
        editable: true,
    },
    {
        field: 'Price',
        headerName: 'Price',
        width: 150,
        editable: true,
    },
]

const DataTable = ({posts}) => {
    const [rows, setRows] = useState([]);
    const [pageSize, setPageSize] =  useState(10);

    useEffect(() => {
            setRows(posts.map( (el, index) => (
                {id: index, Name: el.name, Shop: el.shop, Price: el.finalPrice}
                )
            ))
    }, [posts])

    return(
        <Box sx={{ height: 640, width: '100%', bgcolor: 'background.default' }}  elevation={4}>
            <DataGrid
                rows={rows}
                columns={columns}

                // Pagination atributes
                pageSize={pageSize}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                rowsPerPageOptions={[10, 20, 50, 100]}
                pagination

                checkboxSelection
                disableSelectionOnClick
            />
        </Box>
    )
}

export default DataTable;