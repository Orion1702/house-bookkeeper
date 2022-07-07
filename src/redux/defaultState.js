const today = new Date();
const weekBefore = new Date();
weekBefore.setDate(weekBefore.getDate() - 7);

export const defaultState = { 
    data: 0, 
    isLoading: false,
    filteredData: {
        sort: '', 
        query: '', 
        dateFrom: weekBefore, 
        dateTo: today.toISOString().slice(0, 10)
    }
}