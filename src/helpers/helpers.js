const provName = (province) => {
  switch (province) {
    case "ON":
      return "Ontario"
    case "QC":
      return "Quebec"
    case "NS":
      return "Nova Scotia"
    case "NB":
      return "New Brunswick"
    case "MB":
      return "Manitoba"
    case "BC":
      return "British Columbia"
    case "PE":
      return "Prince Edward Island"
    case "SK":
      return "Saskatchewan"
    case "AB":
      return "Alberta"
    case "NL":
      return "Newfoundland & Labrador"
    case "NT":
      return "Northwest Territories"
    case "YT":
      return "Yukon"
    case "NU":
      return "Nunavut"
    default:
      return "N/A"
  }

}

const monthName = (date) => {
  const monthStr = String(date.split('-')[1])
  switch (monthStr) {
    case "O1":
      return "January"
    case "02":
      return "February"
    case "03":
      return "March"
    case "04":
      return "April"
    case "05":
      return "May"
    case "06":
      return "June"
    case "07":
      return "July"
    case "08":
      return "August"
    case "09":
      return "September"
    case "10":
      return "October"
    case "11":
      return "November"
    case "12":
      return "December"
    default:
      return "N/A"
  }
}

export { provName, monthName }