import React from "react"
import { useRecoilState } from 'recoil'

import RadioInput from './RadioInput'

import { chartTypeState } from '../../recoil/atoms';
import { CHART_TYPES } from "../../config/constants"

const ChartTypePicker = () => {
  const [chartType, setChartType] = useRecoilState(chartTypeState)

  return (
  <div className="chart-type-picker">
    <p>CHART TYPE:</p>
    {
      Object.values(CHART_TYPES).map((type) => (
        <RadioInput
          key={`chart-type-picker_${type}`}
          value={type}
          label={type}
          isChecked={chartType === type}
          onChange={() => setChartType(type)}
        />
      ))
    }
  </div>
)}

export default ChartTypePicker
