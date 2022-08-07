import { sortByDateAB } from "./shortFunction";

export const dateMinMax = (array) => {
    let arrDev = [];
    array.forEach(el => {if(!arrDev.includes(el.date)) {arrDev.push(el.date)} } ) // take all dates
    arrDev = [ ...arrDev.filter(el => el != '')] // remove empty value
    arrDev.sort(sortByDateAB) // sort from start to end
    arrDev.splice(1, arrDev.length - 2) // remove unnecessary
    return arrDev
}