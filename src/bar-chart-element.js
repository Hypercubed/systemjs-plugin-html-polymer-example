/* jshint -W003 */
/* global d3 */

'use strict';

import 'jspm_packages/github/Polymer/polymer@1.0.6/polymer.html!';
import './bar-chart-element.html!';

import Bars from './d3-bar-chart';

Polymer({
  is: 'bar-chart',

  properties: {
    barData: {
      Type: String,
      notify: true
    },
    width: Number,
    height: {
      type: Number,
      value: 400
    },
    data: {
      computed: '_parse(barData)'
    }
  },

  observers: [
    'dataChanged(data)'
  ],

  created: function() {
    this.bars = new Bars(this);
  },

  _parse: JSON.parse,

  dataChanged: function() {
    this._draw();
  },

  _draw: function() {
    if (!this.data) { return; }
    if (!this.elem) { return; }

    d3.select(this.elem)
      .datum(this.data).call(this.bars);
  },

  ready: function() {
    this.elem = this.$.chart;
    this._draw();
  }
});
