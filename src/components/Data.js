import { useEffect, useState } from "react"
import axios from "axios"
import Header from "./Header"
import { provName } from "../helpers/helpers"

const Data = () => {
  const [allProvSummary, setAllProvSummary] = useState([])

  useEffect(() => {
    axios.get(`https://api.covid19tracker.ca/summary/split`).then((res) => {
      const resData = res.data.data
      setAllProvSummary(resData)
    })
  }, [])

  return (
    <>
      <Header>Data</Header>
      <div className="p-6 grid gap-y-8 gap-x-12 lg:grid-cols-2 xl:grid-cols-2">
        {allProvSummary &&
          allProvSummary.map((prov) => {
            return (
              <ul className="text-center" key={prov.province}>
                <li>{provName(prov.province)}</li>
                <li>Date: {prov.date}</li>
                <li>New Cases: {prov.change_cases}</li>
                <li>New Vaccinations: {prov.change_vaccinations}</li>
              </ul>
            )
          })}
      </div>
    </>
  )
}

export default Data
