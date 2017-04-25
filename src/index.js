import React from 'react';
import { render } from 'react-dom';
import ssr from './utilities/ssr/index';
import App from './components/App/index';
import login from './utilities/thisbountyApi/index.min';
import Table from './components/Table/index';

if (typeof document === 'object') {
  render(<App />, document.getElementById('root'));
  render(<Table />, document.getElementById('table'));
  login().then(() => {
    console.log("Logged in");
  }, () => {
    console.log("error");
  });
}

export default ssr;
