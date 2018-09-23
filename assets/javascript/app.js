var articleDataModel = {
  picUrl: "#",
  articleUrl: "#",
  articleTitle: "#",
  articleSummary:
    "...passersby were amazed by the unusually large amounts of blood.",
  articleSentimentScore: -2,
  articleSource: "The Onion",
  sourceLogoUrl: "#"
};

google.charts.load("current", {
  packages: ["geochart"],
  mapsApiKey: "AIzaSyBqNFzgS2GUY_xDEFsYOu44N_XQCfBNYPs"
});

google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
  var data = google.visualization.arrayToDataTable([
    ["Country", "Sentiment Score"],
    ["Qatar", 0.1],
    ["United Kingdom", 0.2],
    ["Canada", 0.3],
    ["Australia", 0.4],
    ["Ireland", 0.5],
    ["Israel", 0.6],
    ["United States", 0.7],
    ["India", 0.8],
    ["Russia", 0.9]
  ]);

  var options = {
    colorAxis: {
      minValue: 0,
      colors: ["#00AEEF", "#FFFDE7", "#F15A22"],
      maxValue: 1
    },
    backgroundColor: { fill: "white", strokeWidth: 0 },
    datalessRegionColor: "#d3d3d3",
    defaultColor: "#d3d3d3",
    displayMode: "regions",
    legend: { textStyle: { color: "black", fontSize: 20 } },
    legend: { numberFormat: "#%" },
    region: "world",
    resolution: "countries",
    keepAspectRatio: true
  };

  var chart = new google.visualization.GeoChart(
    document.getElementById("map-container")
  );

  chart.draw(data, options);

  google.visualization.events.addListener(chart, "select", function() {
    var selection = chart.getSelection();
    if (selection.length) {
      console.log("Country Clicked: " + data.getValue(selection[0].row, 0));
      console.log("-----------");
    }
    var modalBox = $("<div>");
    var closeButton = $("<button>");
    closeButton.text("Close");
    closeButton.addClass("closeModal close");
    modalBox.text(data.getValue(selection[0].row, 0));
    modalBox.addClass("modalBox");
    modalBox.append(closeButton);
    $(".grid-container").append(modalBox);
    console.log(modalBox);
  });
}

$(document).on("click", ".closeModal", function(event) {
  event.preventDefault();
  console.log("You clicked the close button");
  $("div").remove(".modalBox");
});
