import React from 'react';
import { render } from 'react-dom';
import ssr from './utilities/ssr/index';
import App from './components/App/index';
import { bounty, actionFormatter, BootstrapTable, TableHeaderColumn } from './components/Table/index';

if (typeof document === 'object') {
  render(<App />, document.getElementById('root'));
  render(
    <BootstrapTable data={bounty} striped hover>
        <TableHeaderColumn isKey dataField="date">Date</TableHeaderColumn>
        <TableHeaderColumn dataField="name">Name</TableHeaderColumn>
        <TableHeaderColumn dataField="descr">Descr</TableHeaderColumn>
        <TableHeaderColumn dataField="price">Price</TableHeaderColumn>
        <TableHeaderColumn dataField="claim">Claims</TableHeaderColumn>
        <TableHeaderColumn dataField="review">Reviewing</TableHeaderColumn>
        <TableHeaderColumn dataField="resource">Resources</TableHeaderColumn>
        <TableHeaderColumn dataField="action" dataFormat={ actionFormatter }>Actions</TableHeaderColumn>
    </BootstrapTable>,
    document.getElementById('table'),
  );
}

export default ssr;
