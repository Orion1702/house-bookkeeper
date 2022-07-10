export const totalArrayPrice = (arr) => {
   return arr.reduce((accum, el) => { return accum + el.finalPrice;}, 0).toFixed(2)
}

export const diffDays = (day1, day2) => {
   let dateFormat = /^\d{2,4}[./-]\d{2}[./-]\d{2,4}$/

   if (dateFormat.test(day1) && dateFormat.test(day2)) {
      let date1 = new Date(day1);
      let date2 = new Date(day2);
      let diffDays = Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));
      return diffDays;
   } else {
      return 'Wrong Date format'
   }
}