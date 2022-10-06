
import './App.css';
import {Fragment} from 'react';

import Inputuser from './components/Inputuser';
import Listusers from './components/Listusers';

function App() {
  return (
    <Fragment>
      <div className="container">
        <Inputuser />
        <Listusers />
      </div>
    </Fragment>
  );
}

export default App;
