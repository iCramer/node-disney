(function() {
  function preprocessDate(dates) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return dates.reduce((acc, date) => {
      const dateArr = date.split(' ');
      if (dateArr.length !== 3) return acc;

      const twoDigit = (num) => num < 10 ? '0' + num : num;
      let day = dateArr[0].substring(0, dateArr[0].length - 2);
      let month = months.indexOf(dateArr[1]) + 1;
      const year = dateArr[2];

      acc.push(`${year}-${twoDigit(month)}-${twoDigit(day)}`);

      return acc;
    }, []);
  }

  console.log(preprocessDate(['10', '20th Oct 2052', '6th Jun 1933', '26th May 1960']))

})()
