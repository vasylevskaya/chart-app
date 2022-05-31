import React, { useState } from 'react'
import { useRecoilState } from 'recoil'

import { chartDataState } from '../../recoil/atoms'
import { CHART_DATA_TYPES, BORDER_COLORS } from '../../config/constants'

const ChartDataInput = ({ typeOfChartData, indexOfDataset }) => {
  const { LABELS, DATASETS } = CHART_DATA_TYPES

  const [chartData, setChartData] = useRecoilState(chartDataState)
  const [inputValue, setInputValue] = useState(
    typeOfChartData === LABELS
      ? chartData[LABELS].join(',')
      : chartData[DATASETS][indexOfDataset].data.join(',')
  )
  
  const handleChange = (event) => {
    if (typeOfChartData === LABELS ||
      // for dataset inputs allow only digigts, "," and "-"
      (typeOfChartData === DATASETS && event.target.value.match(/^[0-9,-]*$/))) {
      setInputValue(event.target.value)
    }
  }
  const handleSubmit = () => {
    const newValueArray = inputValue.split(',')
    setChartData((prevChartData) => {
      // to avoid "Cannot assign to read only property of #<Object>" error
      // while changing datasets array by index
      let newDatasets
      if (typeOfChartData === DATASETS) {
        newDatasets = [
          ...prevChartData[DATASETS].slice(0, indexOfDataset),
          {
            ...prevChartData[DATASETS][indexOfDataset],
            data: newValueArray,
          },
          ...prevChartData[DATASETS].slice(indexOfDataset + 1)
        ]
      }
      return {
        ...prevChartData,
        [typeOfChartData]: typeOfChartData === DATASETS ? newDatasets : newValueArray
      }
    })
  }
  const handleEnterPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event)
    }
  }

  return (
    <div className="chart-data-setter_input">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onBlur={handleSubmit}
        onKeyPress={handleEnterPress}
        style={{
          border: `2px solid ${indexOfDataset !== undefined
            ? BORDER_COLORS[indexOfDataset] : 'white'}`
        }}
      />
    </div>
  )
}

export default ChartDataInput
