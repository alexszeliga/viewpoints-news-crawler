// Script to pull in news sources from NewsAPI by country and then run sentiment analysis and store data in allData.

$(document).ready(function() {
  // ------------------------VARIABLES------------------------

  var qatarData = [];
  var ukData = [];
  var canadaData = [];
  var australiaData = [];
  var irelandData = [];
  var isrealData = [];
  var usaData = [];
  var indiaData = [];
  var russiaData = [];

  allData = [
    qatarData,
    ukData,
    canadaData,
    australiaData,
    irelandData,
    isrealData,
    usaData,
    indiaData,
    russiaData
  ];

  // ------------------------ON CLICK EVENT HANDLE------------------------

  $("#submitButton").on("click", function(event) {
    event.preventDefault();

    qatarNews();
    ukNews();
    canadaNews();
    australiaNews();
    irelandNews();
    isrealNews();
    usaNews();
    indiaNews();
    russiaNews();
    console.log(allData);
  });

  // ------------------------UNDERLYING FUNCTIONS------------------------

  //  THESE ARE THE FUNCTIONS TO GET NEWS FOR EACH COUNTRY RUN THE SENTIMENT ANALYSIS AND THEN RETURN AN ARRAY OF OBJECTS FOR EACH CONTRY //

  function qatarNews() {
    var searchString = $("#topicInput")
      .val()
      .trim();

    var queryURL =
      "https://newsapi.org/v2/everything?q=" +
      searchString +
      "&language=en&sortBy=relevancy&pageSize=100&sources=al-jazeera-english&apiKey=2877da71f97e4fa28fd788acd1887709";

    $.ajax({
      url: queryURL,
      METHOD: "GET",
      language: "en"
    }).then(function(response) {
      for (var i = 0; i < response.articles.length; i++) {
        var queryText = response.articles[i].description;

        var sentimood = new Sentimood();
        var analysis = sentimood.analyze(queryText);
        var thisScore = analysis.score;

        // CREATE NEW OBJECT
        var articleObj = {
          score: thisScore,
          title: response.articles[i].title,
          description: response.articles[i].description,
          url: response.articles[i].url,
          image: response.articles[i].urlToImage
        };

        qatarData.push(articleObj);
      }
    });

    // console.log("Qatar Array", qatarData);
  }

  function ukNews() {
    var searchString = $("#topicInput")
      .val()
      .trim();

    var queryURL =
      "https://newsapi.org/v2/everything?q=" +
      searchString +
      "&language=en&sortBy=relevancy&pageSize=100&sources=bbc-news&apiKey=2877da71f97e4fa28fd788acd1887709";

    $.ajax({
      url: queryURL,
      METHOD: "GET",
      language: "en"
    }).then(function(response) {
      for (var i = 0; i < response.articles.length; i++) {
        var queryText = response.articles[i].description;

        var sentimood = new Sentimood();
        var analysis = sentimood.analyze(queryText);
        var thisScore = analysis.score;

        // CREATE NEW OBJECT
        var articleObj = {
          score: thisScore,
          title: response.articles[i].title,
          description: response.articles[i].description,
          url: response.articles[i].url,
          image: response.articles[i].urlToImage
        };

        ukData.push(articleObj);
      }
    });

    // console.log("UK Array", ukData);
  }

  function canadaNews() {
    var searchString = $("#topicInput")
      .val()
      .trim();

    var queryURL =
      "https://newsapi.org/v2/everything?q=" +
      searchString +
      "&language=en&sortBy=relevancy&pageSize=100&sources=the-globe-and-mail&apiKey=2877da71f97e4fa28fd788acd1887709";

    $.ajax({
      url: queryURL,
      METHOD: "GET",
      language: "en"
    }).then(function(response) {
      for (var i = 0; i < response.articles.length; i++) {
        var queryText = response.articles[i].description;

        var sentimood = new Sentimood();
        var analysis = sentimood.analyze(queryText);
        var thisScore = analysis.score;

        // CREATE NEW OBJECT
        var articleObj = {
          score: thisScore,
          title: response.articles[i].title,
          description: response.articles[i].description,
          url: response.articles[i].url,
          image: response.articles[i].urlToImage
        };

        canadaData.push(articleObj);
      }
    });

    // console.log("Canada Array", canadaData);
  }

  function australiaNews() {
    var searchString = $("#topicInput")
      .val()
      .trim();

    var queryURL =
      "https://newsapi.org/v2/everything?q=" +
      searchString +
      "&language=en&sortBy=relevancy&pageSize=100&sources=abc-news-au&apiKey=2877da71f97e4fa28fd788acd1887709";

    $.ajax({
      url: queryURL,
      METHOD: "GET",
      language: "en"
    }).then(function(response) {
      for (var i = 0; i < response.articles.length; i++) {
        var queryText = response.articles[i].description;

        var sentimood = new Sentimood();
        var analysis = sentimood.analyze(queryText);
        var thisScore = analysis.score;

        // CREATE NEW OBJECT
        var articleObj = {
          score: thisScore,
          title: response.articles[i].title,
          description: response.articles[i].description,
          url: response.articles[i].url,
          image: response.articles[i].urlToImage
        };

        australiaData.push(articleObj);
      }
    });

    // console.log("Australia Array", australiaData);
  }

  function irelandNews() {
    var searchString = $("#topicInput")
      .val()
      .trim();

    var queryURL =
      "https://newsapi.org/v2/everything?q=" +
      searchString +
      "&language=en&sortBy=relevancy&pageSize=100&sources=the-irish-times&apiKey=2877da71f97e4fa28fd788acd1887709";

    $.ajax({
      url: queryURL,
      METHOD: "GET",
      language: "en"
    }).then(function(response) {
      for (var i = 0; i < response.articles.length; i++) {
        var queryText = response.articles[i].description;

        var sentimood = new Sentimood();
        var analysis = sentimood.analyze(queryText);
        var thisScore = analysis.score;

        // CREATE NEW OBJECT
        var articleObj = {
          score: thisScore,
          title: response.articles[i].title,
          description: response.articles[i].description,
          url: response.articles[i].url,
          image: response.articles[i].urlToImage
        };

        irelandData.push(articleObj);
      }
    });

    // console.log("Ireland Array", irelandData);
  }

  function isrealNews() {
    var searchString = $("#topicInput")
      .val()
      .trim();

    var queryURL =
      "https://newsapi.org/v2/everything?q=" +
      searchString +
      "&language=en&sortBy=relevancy&pageSize=100&sources=the-jerusalem-post&apiKey=2877da71f97e4fa28fd788acd1887709";

    $.ajax({
      url: queryURL,
      METHOD: "GET",
      language: "en"
    }).then(function(response) {
      for (var i = 0; i < response.articles.length; i++) {
        var queryText = response.articles[i].description;

        var sentimood = new Sentimood();
        var analysis = sentimood.analyze(queryText);
        var thisScore = analysis.score;

        // CREATE NEW OBJECT
        var articleObj = {
          score: thisScore,
          title: response.articles[i].title,
          description: response.articles[i].description,
          url: response.articles[i].url,
          image: response.articles[i].urlToImage
        };

        isrealData.push(articleObj);
      }
    });

    // console.log("Isreal Array", isrealData);
  }

  function usaNews() {
    var searchString = $("#topicInput")
      .val()
      .trim();

    var queryURL =
      "https://newsapi.org/v2/everything?q=" +
      searchString +
      "&language=en&sortBy=relevancy&pageSize=100&sources=the-new-york-times&apiKey=2877da71f97e4fa28fd788acd1887709";

    $.ajax({
      url: queryURL,
      METHOD: "GET",
      language: "en"
    }).then(function(response) {
      for (var i = 0; i < response.articles.length; i++) {
        var queryText = response.articles[i].description;

        var sentimood = new Sentimood();
        var analysis = sentimood.analyze(queryText);
        var thisScore = analysis.score;

        // CREATE NEW OBJECT
        var articleObj = {
          score: thisScore,
          title: response.articles[i].title,
          description: response.articles[i].description,
          url: response.articles[i].url,
          image: response.articles[i].urlToImage
        };

        usaData.push(articleObj);
      }
    });

    // console.log("USA Array", usaData);
  }

  function indiaNews() {
    var searchString = $("#topicInput")
      .val()
      .trim();

    var queryURL =
      "https://newsapi.org/v2/everything?q=" +
      searchString +
      "&language=en&sortBy=relevancy&pageSize=100&sources=the-times-of-india&apiKey=2877da71f97e4fa28fd788acd1887709";

    $.ajax({
      url: queryURL,
      METHOD: "GET",
      language: "en"
    }).then(function(response) {
      for (var i = 0; i < response.articles.length; i++) {
        var queryText = response.articles[i].description;

        var sentimood = new Sentimood();
        var analysis = sentimood.analyze(queryText);
        var thisScore = analysis.score;

        // CREATE NEW OBJECT
        var articleObj = {
          score: thisScore,
          title: response.articles[i].title,
          description: response.articles[i].description,
          url: response.articles[i].url,
          image: response.articles[i].urlToImage
        };

        indiaData.push(articleObj);
      }
    });

    // console.log("India Array", indiaData);
  }

  function russiaNews() {
    var searchString = $("#topicInput")
      .val()
      .trim();

    var queryURL =
      "https://newsapi.org/v2/everything?q=" +
      searchString +
      "&language=en&sortBy=relevancy&pageSize=100&sources=rt&apiKey=2877da71f97e4fa28fd788acd1887709";

    $.ajax({
      url: queryURL,
      METHOD: "GET",
      language: "en"
    }).then(function(response) {
      for (var i = 0; i < response.articles.length; i++) {
        var queryText = response.articles[i].description;

        var sentimood = new Sentimood();
        var analysis = sentimood.analyze(queryText);
        var thisScore = analysis.score;

        // CREATE NEW OBJECT
        var articleObj = {
          score: thisScore,
          title: response.articles[i].title,
          description: response.articles[i].description,
          url: response.articles[i].url,
          image: response.articles[i].urlToImage
        };

        russiaData.push(articleObj);
      }
    });

    // console.log("Russia Array", russiaData);
  }

  // ------------------------------------------------
});
