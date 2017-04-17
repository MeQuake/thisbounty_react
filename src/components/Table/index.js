import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

require('./index.css');

const products = [
  {
    id: 1,
    name: 'Product1',
    price: 120,
  }, {
    id: 2,
    name: 'Product2',
    price: 80,
  },
];

export { BootstrapTable, TableHeaderColumn, products };
