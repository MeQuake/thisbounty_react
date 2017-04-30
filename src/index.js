import React from 'react';
import { render } from 'react-dom';
import App from './components/App/index';
import login from './utilities/thisbountyApi/index.min';

render(<App />, document.getElementById('root'));
login().then(() => {
  document.getElementsByClassName('table-insert-bounty')[0].style.display = 'block';
}, () => {
  console.log("error");
});
