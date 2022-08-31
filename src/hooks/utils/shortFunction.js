export const totalArrayPrice = (arr) => {
   let totalPrice = arr.reduce((accum, el) => { return accum + el.finalPrice}, 0).toFixed(2)
   return totalPrice
}

export const dateChanger = (date, changer) => {
   let newDate  = new Date(date)
   newDate.setDate(newDate.getDate() + changer)
   return newDate.toISOString().slice(0, 10);
}

export const sortByDateAB = (a,b) => { return new Date(a) - new Date(b)}
export const sortByDateBA = (a,b) => { return new Date(b) - new Date(a)}