import React from "react"
import { nanoid } from "nanoid"
import { useRecoilValue } from 'recoil'

import ChartDataInput from "./ChartDataInput"
import ValuesControl from "./ValuesControl"

import { chartDataState } from '../../recoil/atoms'
import { CHART_DATA_TYPES } from "../../config/constants"

const ChartDataSetter = () => {
  const chartData = useRecoilValue(chartDataState)
  const numberOfDatasets = chartData.datasets.length
  const { LABELS, DATASETS } = CHART_DATA_TYPES

  return (
    <div className="chart-data-setter">
      <p>LABELS:</p>
      <ChartDataInput typeOfChartData={LABELS} />
      <p>VALUES:</p>
      <ValuesControl />
      { /* non-empty array to create an input for each of datasets */
        new Array(numberOfDatasets).fill(0).map((dataset, index) => (
          <ChartDataInput
            key={nanoid()}
            typeOfChartData={DATASETS}
            indexOfDataset={index}
          />
        ))
      }
    </div>
  )
}

export default ChartDataSetter
