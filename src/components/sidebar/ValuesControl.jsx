import React from "react"
import { useRecoilState } from 'recoil'

import { chartDataState } from '../../recoil/atoms'
import { BORDER_COLORS, BACKGROUND_COLORS } from "../../config/constants"

const ValuesControl = () => {
  const [chartData, setChartData] = useRecoilState(chartDataState)
  const numberOfLabeles = chartData.labels.length
  const numberOfDatasets = chartData.datasets.length

  const removeDataset = () => {
    // make a copy of datasets array and remove last object (dataset)
    const newDatasets = [ ...chartData.datasets ]
    newDatasets.splice(-1)
    setChartData({
      ...chartData,
      datasets: newDatasets
    })
  }
  const addDataset = () => {
    setChartData({
      ...chartData,
      datasets: [
        ...chartData.datasets,
        {
          label: `Dataset ${numberOfDatasets + 1}`,
          // creates a new data array with a length of chart columns (labels)
          // with all the values equal 1 by default
          data: new Array(numberOfLabeles).fill(1),
          borderColor: BORDER_COLORS[numberOfDatasets],
          backgroundColor: BACKGROUND_COLORS[numberOfDatasets],
        }
      ]
    })
  }

  return (
    <div className="chart-data-setter_values-control">
      <button
        type="button"
        disabled={numberOfDatasets === 1}
        onClick={removeDataset}
      >
        -
      </button>
      <button
        type="button"
        disabled={numberOfDatasets === 5}
        onClick={addDataset}
      >
        +
      </button>
    </div>
  )
}

export default ValuesControl
