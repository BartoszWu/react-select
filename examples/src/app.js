/* eslint react/prop-types: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import './example.less';

import CustomMenuRenderer from './components/CustomMenuRenderer';
ReactDOM.render(
	<div>
		<CustomMenuRenderer label="CustomMenuRenderer" />
	</div>,
	document.getElementById('example')
);
