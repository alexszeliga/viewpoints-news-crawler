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
    colorAxis: {minValue: 0, colors: ['#00AEEF', '#F7F2DA', '#F26422'], maxValue: 1},
    backgroundColor: {fill: 'white', strokeWidth: 0},
    datalessRegionColor: '#d3d3d3',
    defaultColor: '#d3d3d3',
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
