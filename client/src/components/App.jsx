import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from './Home';
import Drag from './Drag';

const App = () => (
  <MuiThemeProvider>
    <div className="App">
      <Tabs>
        <Tab
          label="TOP HEADLINES"
        >
          <Home />
        </Tab>
        <Tab
          label="DRAG AND DROP"
        >
          <Drag />
        </Tab>
      </Tabs>
    </div>
  </MuiThemeProvider>
);

export default App;
