google.charts.load('current', {
  'packages':['geochart'],
  'mapsApiKey': 'AIzaSyBqNFzgS2GUY_xDEFsYOu44N_XQCfBNYPs'
});

google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
  var data = google.visualization.arrayToDataTable([
    ['Country', 'Sentiment Score'],
    ['Qatar', .10],
    ['United Kingdom', .20],
    ['Canada', .30],
    ['Australia', .40],
    ['Ireland', .50],
    ['Israel', .60],
    ['United States', .70],
    ['India', .80],
    ['Russia', .90]
  ]);

  var options = {
    colorAxis: {minValue: 0, colors: ['#0000FF', '#800080', '#960016'], maxValue: 1},
    backgroundColor: {fill: '#2d2d2d', strokeWidth: 0},
    datalessRegionColor: '#7c7c7c',
    defaultColor: '#7c7c7c',
    displayMode: 'regions',
    legend: {textStyle: {color: 'black', fontSize: 20}},
    legend: {numberFormat:'#%'},
    region: 'world',
    resolution: 'countries',
    keepAspectRatio: true
  };

  var chart = new google.visualization.GeoChart(document.getElementById('map-container'));

  chart.draw(data, options);

  google.visualization.events.addListener(chart, 'select', function() {
    var selection = chart.getSelection();
    if (selection.length) {
    console.log("Country Clicked: " + data.getValue(selection[0].row, 0));
    console.log("-----------")
    }
  });

}
