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
  }
}

export { provName }