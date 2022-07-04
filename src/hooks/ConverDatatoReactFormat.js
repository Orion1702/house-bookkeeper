const ExcelDateToJSDate = (dateExcel) => {
    let result = dateExcel ? dateExcel
        .replace('Date(','')
        .replace(')','')
        // .split(',')
        // .map(elem=> parseInt(elem, 10))
        : '';
    return result;
}


export const ConverDatatoReactFormat = (data) => {
    let result = []
    data.forEach(el => {
        el.date = ExcelDateToJSDate(el.date);
        result.push(el)
    });

    console.log('ConverDatatoReactFormat')
    return result;
}