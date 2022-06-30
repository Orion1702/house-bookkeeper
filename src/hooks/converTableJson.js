export const converTableJson = (jsonData, outputClassname) => {
    // Take data from Google table and put in block with class name outputClassname

    // console.log(jsonData) // JSON data from google table
    const output = document.querySelector(outputClassname)
    const data = []  
  
    const colz = [];
    const tr = document.createElement('tr');
    //Extract column labels
    jsonData.table.cols.forEach((heading) => {
        if (heading.label) {
            let column = heading.label;
            colz.push(column);
            const th = document.createElement('th');
            th.innerText = column;
            tr.appendChild(th);
        }
    })
    output.appendChild(tr);

    function processRows(json) {
        json.forEach((row) => {
    
            const tr = document.createElement('tr');
            const keys = Object.keys(row);
        
            keys.forEach((key) => {
                const td = document.createElement('td');
                td.textContent = row[key];
                tr.appendChild(td);
            })
            output.appendChild(tr);
        })
    }
    processRows(data);

    //extract row data:
    jsonData.table.rows.forEach((rowData) => {
        const row = {};
        colz.forEach((ele, ind) => {
            row[ele] = (rowData.c[ind] != null) ? rowData.c[ind].v : '';
        })
        data.push(row);
    })
    
    console.log(data)
}

export const dataConvert = (jsonData) => {
    const colz = [];
    const data = []  
    //Extract column labels
    jsonData.table.cols.forEach((heading) => {
        if (heading.label) {
            let column = heading.label;
            colz.push(column);
        }
    })

    jsonData.table.rows.forEach((rowData) => {
        const row = {};
        colz.forEach((ele, ind) => {
            row[ele] = (rowData.c[ind] != null) ? rowData.c[ind].v : '';
        })
        data.push(row);
    })

    return data;
}