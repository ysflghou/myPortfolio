const Months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

export default {
  GetPeriod(fromDate: string, toDate: string): string {
    var toDateMiliseconds = 0;
    if(toDate == "Present") {
      toDateMiliseconds = Date.now();
    }
    else {
      toDateMiliseconds = new Date(toDate).getTime();
    }
    var diff = toDateMiliseconds - new Date(fromDate).getTime();
    var diffInMonths = diff / (1000 * 3600 * 24 * 30.5); // not exact
    if (diffInMonths <= 0) return "1 mon";
    else if (diffInMonths < 12) return Math.ceil(diffInMonths) + " mons";
    else {
      var years = Math.floor(diffInMonths / 12);
      var yearFormat = years + (years == 1 ? " yr" : " yrs");
      var mons = Math.ceil(diffInMonths % 12);
      var monsFormat = mons == 0 ? "" : mons + (mons == 1 ? " mon" : " mons");
      return yearFormat + " " + monsFormat;
    }
  },
  GetShowedDate(dateContent: string): string {
    if (dateContent == "Present") {
      return dateContent;
    }
    var date = new Date(dateContent);
    var year = date.getFullYear();
    var month = date.getMonth();
    var monthString = Months[month];
    return monthString + " " + year;
  }
};
