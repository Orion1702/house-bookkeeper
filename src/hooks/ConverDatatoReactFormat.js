const ExcelDateToJSDate = (dateExcel) => {
    let result = '';
    if (dateExcel) {
        result = dateExcel
        .replace('Date(','')
        .replace(')','')
        .split(',')
        .map(elem=> parseInt(elem, 10));
        result[1] += 1;
        result = result.toString();
        // console.log(`dateExcel = ${dateExcel} ||| result = ${result} ${typeof(result)}`)
    }

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