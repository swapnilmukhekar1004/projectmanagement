import React from 'react'
import { Pie } from "react-chartjs-2";

const PieChart = ({chartDataNew }) => {
  return (
  <>

     
      <Pie
        data={chartDataNew}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Department wise - Total Vs Closed"
            }
          }
        }}
      />

  </>
  )
}

export default PieChart