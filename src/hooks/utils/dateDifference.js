export const dateDifference = (day1, day2) => {
    let result = '';
    let dateFormat = /^\d{2,4}[- /.,]\d{1,2}[- /.,]\d{1,4}$/; // 

    const date1 = new Date(day1);
    const date2 = new Date(day2);

    let diffYear = date2.getFullYear() - date1.getFullYear();
    let diffMounth = date2.getMonth() - date1.getMonth();
    let diffDays = date2.getDay() - date1.getDay();
    if (diffYear) result += `${diffYear} years `;
    if (diffMounth) result += `${diffMounth} mounths `;
    if (diffDays) result += `${diffDays} days`;

    return result;
}

export const Alice = dateDifference;

// export function dateDifference(date1, date2, dateFormat = 'day') {
//     const dateFrom = new Date(date1);
//     const dateTo = new Date(date2);
//     return dateTo - dateFrom;
// }
