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
      <div className="p-6 grid gap-y-3 gap-x-4 lg:grid-cols-2 xl:grid-cols-2">
        {allProvSummary &&
          allProvSummary.map((prov) => {
            return (
              <div
                key={provName(prov.province)}
                className="text-center px-4 py-2 divide-y divide-gray-400 bg-gray-200 rounded-xl"
              >
                <header className="text-lg font-semibold">
                  {provName(prov.province)}
                </header>
                <ul key={prov.province}>
                  <li className="text-sm font-medium">{prov.date}</li>
                  <li>New Cases: {prov.change_cases}</li>
                  <li>New Vaccinations: {prov.change_vaccinations}</li>
                </ul>
              </div>
            )
          })}
      </div>
    </>
  )
}

export default Data
