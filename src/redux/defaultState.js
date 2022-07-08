const today = new Date();
const weekBefore = new Date();
weekBefore.setDate(weekBefore.getDate() - 7)

const dateFrom = weekBefore.toISOString().slice(0, 10);
const dateTo = today.toISOString().slice(0, 10);

export const defaultState = { 
    data: 0, 
    isLoading: false,
    filteredData: {
        sort: '', 
        query: '', 
        dateFrom: dateFrom, 
        dateTo: dateTo,
    }
}