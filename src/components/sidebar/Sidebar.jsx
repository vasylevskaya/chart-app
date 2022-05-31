import React, { useState} from "react"
import { useMediaQuery } from 'react-responsive'

import ChartDataSetter from './ChartDataSetter'
import ChartTypePicker from './ChartTypePicker'

const SideBar = () => {
  const isMobileOrTabletDevice = useMediaQuery({ maxWidth: 900 })
  const [contentIsVisible, setContentIsVisible] = useState(false)

  const toggleSidebar = () => setContentIsVisible(!contentIsVisible)

  return (
    <div className="sidebar">
      {/* btn to toggle visibility of sidebar content for devices with width < 900px */
        isMobileOrTabletDevice && (
          <button
          type="button"
          className={`sidebar_button-toggle ${contentIsVisible ? 'active': 'unactive'}`}
          onClick={toggleSidebar}
        />
        )
      }
      {
        (!isMobileOrTabletDevice || contentIsVisible) && (
          <div className={`sidebar_content ${contentIsVisible ? 'active': 'unactive'}`}>
            <ChartDataSetter />
            <ChartTypePicker />
          </div>
        )
      }
    </div>
  )
}

export default SideBar
