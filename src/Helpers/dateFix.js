const fixDate = (inputDate) => {
   const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
   let outputDate;

   const day = inputDate.getDate()
   const month = monthArr[inputDate.getMonth()]
   const year = inputDate.getFullYear()

   const hours = inputDate.getHours()
   const minutes = inputDate.getMinutes()
   const seconds = inputDate.getSeconds()

   outputDate = `${month} ${day} ${year} ${hours}:${minutes}:${seconds}`
   return outputDate
}

export default fixDate