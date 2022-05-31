import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

import { CHART_TYPES } from '../config/constants'

const { persistAtom } = recoilPersist()

export const chartDataState = atom({
  key: 'data',
  default: {
    labels: [
      'Default Label 1',
      'Default Label 2',
      'Default Label 3',
      'Default Label 4',
      'Default Label 5',
    ],
    datasets: [
      {
        label: 'Dataset 1',
        data: [35, 5, 10, 15, 20],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [10, 3, '-6', 17, '-20'],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      }
    ]
  },
  effects_UNSTABLE: [persistAtom]
})

export const chartTypeState = atom({
  key: 'chartType',
  default: CHART_TYPES.BAR,
  effects_UNSTABLE: [persistAtom]
})
