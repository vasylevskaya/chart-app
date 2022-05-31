import React from 'react';
import { RecoilRoot } from 'recoil'

import Sidebar from './sidebar/Sidebar'
import ChartContainer from './ChartContainer';

function App() {
  return (
    <RecoilRoot>
      <div className="app">
        <Sidebar />
        <ChartContainer />
      </div>
    </RecoilRoot>
  );
}

export default App;
