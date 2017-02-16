var React = require('react');
var Colors = require('../palette/colors');
var Pie = require('../charts/pie');

var countries = [
  { mi: 'M12', used_litter: 59859996 },
  { mi: 'M52', used_litter: 118395054 },
  { mi: 'MA2', used_litter: 65806000 },
  { mi: 'MB2', used_litter: 40117096 },
  { mi: 'MB1', used_litter: 40117096 },
  { mi: 'M17', used_litter: 127290000 }
];

var palette = Colors.mix({
  r: 130,
  g: 140,
  b: 210
}, {
  r: 180,
  g: 205,
  b: 150
});

function used_litter(c) { return c.used_litter; }

module.exports = React.createClass({
  render: function() {
    return <Pie data={ countries } palette={ palette } r={ 60 } R={ 140 } accessor={ used_litter } />
  }
});
