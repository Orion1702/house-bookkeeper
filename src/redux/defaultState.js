const today = new Date();
const weekBefore = new Date();
weekBefore.setDate(weekBefore.getDate() - 7)

const dateFrom = weekBefore.toISOString().slice(0, 10);
const dateTo = today.toISOString().slice(0, 10);

export const defaultState = { 
    // data: 0, 
    isLoading: false,
    moneyPerDay: Number((100 / 7).toFixed(2)),
    totalSpend : 0,
    filteredData: {
        sort: '', 
        query: '', 
        dateFrom: dateFrom, 
        dateTo: dateTo,
    },
    /*
    dataParameters: {
        length: 0,
        minDate: '',
        maxDate: '',
    }
    */
}