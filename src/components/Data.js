import { useEffect, useState } from "react"
import axios from "axios"
import Header from "./Header"

const Data = () => {
  const [provData, setProvData] = useState([])

  useEffect(() => {
    axios
      .get(`https://api.covid19tracker.ca/summary/split`)
      .then((res) => {
        setProvData(res.data.data)
      })
  }, [])

  return (
    <>
      <Header>Data</Header>
      <div>
        {provData && provData.map((prov) => {
          return (
            <div 
              key={prov.province}
            >
              <p>
                Province: {prov.province}
              </p>
              <p>
                Date: {prov.date}
              </p>
              <p>
                New Cases: {prov.change_cases}
              </p>
              <p>
                New Vaccinations: {prov.change_vaccinations}
              </p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Data
