import React from 'react';
import ssr from './utilities/ssr/index';
import App from './components/App/index';


ssr.transforms.push(ssr.insertBefore(<App />, '#root'));

export default ssr;
