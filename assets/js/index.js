
import $ from 'jquery';

var React = require('react')
var ReactDOM = require('react-dom')

import ExchangesList from './ExchangesList.js'

ReactDOM.render(<ExchangesList url='/exchanges/' pollInterval={1000} />, 
    document.getElementById('react-app'));

