import React from 'react';
import { render } from 'react-dom';
import ssr from './utilities/ssr/index';
import App from './components/App/index';
import { products, BootstrapTable, TableHeaderColumn } from './components/Table/index';

if (typeof document === 'object') {
  render(<App />, document.getElementById('root'));
  render(
    <BootstrapTable data={products} striped hover>
        <TableHeaderColumn isKey dataField="id">Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
    </BootstrapTable>,
    document.getElementById('table'),
  );
}

ssr.transforms.push(ssr.insertBefore(<App />, '#root'));

export default ssr;
