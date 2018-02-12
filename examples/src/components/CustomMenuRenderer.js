import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';
import menuRenderer from './../../../src/utils/defaultMenuRenderer';
import ReactTether from 'react-tether';
import { AutoSizer } from 'react-virtualized';

const menuRendererFunction = function(reactSelectProps) {
  return (
    <ReactTether
      attachment="top left"
      targetAttachment="bottom left"
      constraints={[{
        to: 'window',
        attachment: 'together'
      }]}
    >
      <div/>
      <div style={{
        width: 396,
        zIndex: 999,
        background: 'white',
        border: '1px solid black'
      }}
      >
        {menuRenderer(reactSelectProps)}
      </div>
    </ReactTether>
  );
};


const CustomMenuRenderer = createClass({
	displayName: 'CustomMenuRenderer',
	getInitialState () {
		return {
			options: [
				{ value: 1, label: '1' },
        { value: 2, label: '2' },
        { value: 3, label: '3' },
        { value: 4, label: '4' },
        { value: 5, label: '5' },
        { value: 6, label: '6' },
        { value: 7, label: '7' },
        { value: 8, label: '8' },
        { value: 9, label: '9' },
        { value: 10, label: '10' },
        { value: 11, label: '11' },
        { value: 12, label: '12' },

			],
			value: null
		};
	},
	onChange(value) {
		this.setState({ value });
		console.log('Boolean Select value changed to', value);
	},
	render () {
		return (
			<div className="section">
				<h3 className="section-heading">{this.props.label}</h3>
				<Select
					onChange={this.onChange}
					options={this.state.options}
          simpleValue
          menuRenderer={menuRendererFunction}
					value={this.state.value}
					/>
			</div>
		);
	}
});

module.exports = CustomMenuRenderer;
