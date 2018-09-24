google.charts.load("current", {
  packages: ["geochart"],
  mapsApiKey: "AIzaSyBqNFzgS2GUY_xDEFsYOu44N_XQCfBNYPs"
});

google.charts.setOnLoadCallback(drawRegionsMap);
var qatSentimentScore = 0;
var ukSentimentScore = 0;
var canSentimentScore = 0;
var ausSentimentScore = 0;
var ireSentimentScore = 0;
var isrSentimentScore = 0;
var usaSentimentScore = 0;
var indSentimentScore = 0;
var rusSentimentScore = 0;

var qatFlag = false;
var ukFlag = false;
var canFlag = false;
var ausFlag = false;
var ireFlag = false;
var isrFlag = false;
var usaFlag = false;
var indFlag = false;
var rusFlag = false;

var mapMin = 0;
var mapMax = 1;

function drawMapAfterAPIIngest() {
  if (
    qatFlag &&
    ukFlag &&
    canFlag &&
    ausFlag &&
    ireFlag &&
    isrFlag &&
    usaFlag &&
    indFlag &&
    rusFlag
  ) {
    qatFlag = false;
    ukFlag = false;
    canFlag = false;
    ausFlag = false;
    ireFlag = false;
    isrFlag = false;
    usaFlag = false;
    indFlag = false;
    rusFlag = false;

    drawRegionsMap();
  }
}

function drawRegionsMap() {
  var data = google.visualization.arrayToDataTable([
    ["Country", "Sentiment Score"],
    ["Qatar", qatSentimentScore],
    ["United Kingdom", ukSentimentScore],
    ["Canada", canSentimentScore],
    ["Australia", ausSentimentScore],
    ["Ireland", ireSentimentScore],
    ["Israel", isrSentimentScore],
    ["United States", usaSentimentScore],
    ["India", indSentimentScore],
    ["Russia", indSentimentScore]
  ]);

  var options = {
    colorAxis: {
      minValue: mapMin,
      colors: ["#00AEEF", "#F7F2DA", "#F26422"],
      maxValue: mapMax
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
      // console.log("Country Clicked: " + data.getValue(selection[0].row, 0));
      // console.log("-----------");
    }
    var countryName = data.getValue(selection[0].row, 0);
    var modalBox = $("<div>");
    var closeButton = $("<button>");
    var modalTable = $("<table>");
    modalTable.addClass("table");
    modalTable.append(
      "<tr><th>Pic</th><th>Title</th><th>Score</th><th>Summary</th></tr>"
    );
    closeButton.text("Close");
    closeButton.addClass("closeModal close");
    modalBox.text(countryName);
    modalBox.addClass("modalBox");
    modalBox.append(closeButton, modalTable);
    $(".grid-container").append(modalBox);
    // console.log(modalBox);
    console.log(countryName);
    console.log(scores);
    switch (countryName) {
      case "Russia":
        console.log(allData.russia);
        // TODO: make table row with A small pic, the article title linked to the article, the sentiment score, ??the summary??
        console.log(scores.russia);
        for (var i = 0; i < allData.russia.length; i++) {
          var newTableRow = $("<tr>");
          var newCellPic = $("<td>");
          var newCellTitle = $("<td>");
          var newCellScore = $("<td>");
          var newCellSummary = $("<td>");
          newCellPic.append(
            "<img src=" +
              allData.russia[i].image +
              " alt='article image' class='img-thumbnail'>"
          );
          newCellTitle.append(
            "<a href=" +
              allData.russia[i].url +
              ">" +
              allData.russia[i].title +
              "</a>"
          );
          newCellScore.text(allData.russia[i].score);
          newCellSummary.text(allData.russia[i].description);
          newTableRow.append(
            newCellPic,
            newCellTitle,
            newCellScore,
            newCellSummary
          );
          modalTable.append(newTableRow);
        }
        break;
      case "Canada":
        console.log(allData.canada);
        console.log(scores.canada);
        for (var i = 0; i < allData.canada.length; i++) {
          var newTableRow = $("<tr>");
          var newCellPic = $("<td>");
          var newCellTitle = $("<td>");
          var newCellScore = $("<td>");
          var newCellSummary = $("<td>");
          newCellPic.append(
            "<img src=" +
              allData.canada[i].image +
              " alt='article image' class='img-thumbnail'>"
          );
          newCellTitle.append(
            "<a href=" +
              allData.canada[i].url +
              ">" +
              allData.canada[i].title +
              "</a>"
          );
          newCellScore.text(allData.canada[i].score);
          newCellSummary.text(allData.canada[i].description);
          newTableRow.append(
            newCellPic,
            newCellTitle,
            newCellScore,
            newCellSummary
          );
          modalTable.append(newTableRow);
        }

        break;
      case "Qatar":
        console.log(allData.qatar);
        console.log(scores.qatar);
        for (var i = 0; i < allData.qatar.length; i++) {
          var newTableRow = $("<tr>");
          var newCellPic = $("<td>");
          var newCellTitle = $("<td>");
          var newCellScore = $("<td>");
          var newCellSummary = $("<td>");
          newCellPic.append(
            "<img src=" +
              allData.qatar[i].image +
              " alt='article image' class='img-thumbnail'>"
          );
          newCellTitle.append(
            "<a href=" +
              allData.qatar[i].url +
              ">" +
              allData.qatar[i].title +
              "</a>"
          );
          newCellScore.text(allData.qatar[i].score);
          newCellSummary.text(allData.qatar[i].description);
          newTableRow.append(
            newCellPic,
            newCellTitle,
            newCellScore,
            newCellSummary
          );
          modalTable.append(newTableRow);
        }

        break;
      case "United Kingdom":
        console.log(allData.uk);
        console.log(scores.uk);
        for (var i = 0; i < allData.uk.length; i++) {
          var newTableRow = $("<tr>");
          var newCellPic = $("<td>");
          var newCellTitle = $("<td>");
          var newCellScore = $("<td>");
          var newCellSummary = $("<td>");
          newCellPic.append(
            "<img src=" +
              allData.uk[i].image +
              " alt='article image' class='img-thumbnail'>"
          );
          newCellTitle.append(
            "<a href=" + allData.uk[i].url + ">" + allData.uk[i].title + "</a>"
          );
          newCellScore.text(allData.uk[i].score);
          newCellSummary.text(allData.uk[i].description);
          newTableRow.append(
            newCellPic,
            newCellTitle,
            newCellScore,
            newCellSummary
          );
          modalTable.append(newTableRow);
        }

        break;
      case "Australia":
        console.log(allData.australia);
        console.log(scores.australia);
        for (var i = 0; i < allData.australia.length; i++) {
          var newTableRow = $("<tr>");
          var newCellPic = $("<td>");
          var newCellTitle = $("<td>");
          var newCellScore = $("<td>");
          var newCellSummary = $("<td>");
          newCellPic.append(
            "<img src=" +
              allData.australia[i].image +
              " alt='article image' class='img-thumbnail'>"
          );
          newCellTitle.append(
            "<a href=" +
              allData.australia[i].url +
              ">" +
              allData.australia[i].title +
              "</a>"
          );
          newCellScore.text(allData.australia[i].score);
          newCellSummary.text(allData.australia[i].description);
          newTableRow.append(
            newCellPic,
            newCellTitle,
            newCellScore,
            newCellSummary
          );
          modalTable.append(newTableRow);
        }

        break;
      case "Ireland":
        console.log(allData.ireland);
        console.log(scores.ireland);
        for (var i = 0; i < allData.ireland.length; i++) {
          var newTableRow = $("<tr>");
          var newCellPic = $("<td>");
          var newCellTitle = $("<td>");
          var newCellScore = $("<td>");
          var newCellSummary = $("<td>");
          newCellPic.append(
            "<img src=" +
              allData.ireland[i].image +
              " alt='article image' class='img-thumbnail'>"
          );
          newCellTitle.append(
            "<a href=" +
              allData.ireland[i].url +
              ">" +
              allData.ireland[i].title +
              "</a>"
          );
          newCellScore.text(allData.ireland[i].score);
          newCellSummary.text(allData.ireland[i].description);
          newTableRow.append(
            newCellPic,
            newCellTitle,
            newCellScore,
            newCellSummary
          );
          modalTable.append(newTableRow);
        }

        break;
      case "Israel":
        console.log(allData.isreal);
        console.log(scores.isreal);
        for (var i = 0; i < allData.isreal.length; i++) {
          var newTableRow = $("<tr>");
          var newCellPic = $("<td>");
          var newCellTitle = $("<td>");
          var newCellScore = $("<td>");
          var newCellSummary = $("<td>");
          newCellPic.append(
            "<img src=" +
              allData.isreal[i].image +
              " alt='article image' class='img-thumbnail'>"
          );
          newCellTitle.append(
            "<a href=" +
              allData.isreal[i].url +
              ">" +
              allData.isreal[i].title +
              "</a>"
          );
          newCellScore.text(allData.isreal[i].score);
          newCellSummary.text(allData.isreal[i].description);
          newTableRow.append(
            newCellPic,
            newCellTitle,
            newCellScore,
            newCellSummary
          );
          modalTable.append(newTableRow);
        }

        break;
      case "United States":
        console.log(allData.usa);
        console.log(scores.usa);
        for (var i = 0; i < allData.usa.length; i++) {
          var newTableRow = $("<tr>");
          var newCellPic = $("<td>");
          var newCellTitle = $("<td>");
          var newCellScore = $("<td>");
          var newCellSummary = $("<td>");
          newCellPic.append(
            "<img src=" +
              allData.usa[i].image +
              " alt='article image' class='img-thumbnail'>"
          );
          newCellTitle.append(
            "<a href=" +
              allData.usa[i].url +
              ">" +
              allData.usa[i].title +
              "</a>"
          );
          newCellScore.text(allData.usa[i].score);
          newCellSummary.text(allData.usa[i].description);
          newTableRow.append(
            newCellPic,
            newCellTitle,
            newCellScore,
            newCellSummary
          );
          modalTable.append(newTableRow);
        }

        break;
      case "india":
        console.log(allData.india);
        console.log(scores.india);
        for (var i = 0; i < allData.india.length; i++) {
          var newTableRow = $("<tr>");
          var newCellPic = $("<td>");
          var newCellTitle = $("<td>");
          var newCellScore = $("<td>");
          var newCellSummary = $("<td>");
          newCellPic.append(
            "<img src=" +
              allData.india[i].image +
              " alt='article image' class='img-thumbnail'>"
          );
          newCellTitle.append(
            "<a href=" +
              allData.india[i].url +
              ">" +
              allData.india[i].title +
              "</a>"
          );
          newCellScore.text(allData.india[i].score);
          newCellSummary.text(allData.india[i].description);
          newTableRow.append(
            newCellPic,
            newCellTitle,
            newCellScore,
            newCellSummary
          );
          modalTable.append(newTableRow);
        }

        break;
    }
  });
}

$(document).on("click", ".closeModal", function(event) {
  event.preventDefault();
  // console.log("You clicked the close button");
  $("div").remove(".modalBox");
});

$(window).on("resize", function() {
  drawRegionsMap();
});
