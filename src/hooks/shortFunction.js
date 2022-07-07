export const totalArrayPrice = (arr) => {
   return arr.reduce((accum, el) => { return accum + el.finalPrice;}, 0).toFixed(2)
}