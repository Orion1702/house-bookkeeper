import { dataConvert } from "../hooks/converTableJson";

export default class DataService {
    static async getFromTable(callback) {
        const sheetId = '1-38BWWwyzw16CW5rPycbnK73MAg8MbM9';
        const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
        const sheetName = 'user-data';
        const query = encodeURIComponent('Select *')
        const url = `${base}&sheet=${sheetName}&tq=${query}`
    
        fetch(url)
        .then(res => res.text())
        .then(rep => {
            //Remove additional text and extract only JSON:
            const jsonData = JSON.parse(rep.substring(47).slice(0, -2));
            console.log(dataConvert(jsonData))
            return(callback(dataConvert(jsonData)))
        });
    }
}