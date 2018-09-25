// Script to pull in news sources from NewsAPI by country and then run sentiment analysis and store data in allData.
// 6d89e0cfe1464879bbc8c29d636efd66
var sentScoreArray = [];
$(document).ready(function() {
  // ------------------------VARIABLES------------------------

  window.allData = {
    qatar: [],
    uk: [],
    canada: [],
    australia: [],
    ireland: [],
    israel: [],
    usa: [],
    india: [],
    russia: []
  };

  window.scores = {
    qatar: [],
    uk: [],
    canada: [],
    australia: [],
    ireland: [],
    israel: [],
    usa: [],
    india: [],
    russia: []
  };

  // ------------------------ON CLICK EVENT HANDLE------------------------

  $("#submitButton").on("click", function(event) {
    event.preventDefault();

    qatarNews();
    ukNews();
    canadaNews();
    australiaNews();
    irelandNews();
    israelNews();
    usaNews();
    indiaNews();
    russiaNews();
    console.log(window.sentScoreArray);
    //console.log(allData);
    //console.log(scores);
  });

  // ------------------------UNDERLYING FUNCTIONS------------------------

  //  THESE ARE THE FUNCTIONS TO GET NEWS FOR EACH COUNTRY RUN THE SENTIMENT ANALYSIS AND THEN RETURN AN ARRAY OF OBJECTS FOR EACH CONTRY //

  function qatarNews() {
    allData.qatar = [];
    scores.qatar = [];

    var searchString = $("#topicInput")
      .val()
      .trim();

    var queryURL =
      "https://newsapi.org/v2/everything?q=" +
      searchString +
      "&language=en&sortBy=relevancy&pageSize=10&sources=al-jazeera-english&apiKey=6d89e0cfe1464879bbc8c29d636efd66";

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

        allData.qatar.push(articleObj);

        // Average / total sentiment calc
      }
      var total = 0;
      for (var j = 0; j < allData.qatar.length; j++) {
        total += allData.qatar[j].score;
      }
      var average = total / allData.qatar.length;

      var scoreObj = {
        total: total,
        average: average
      };
      scores.qatar.push(scoreObj);
      sentScoreArray.push(scoreObj.average);
      qatSentimentScore = scoreObj.average;
      qatFlag = true;
      drawMapAfterAPIIngest();
    });
  }

  function ukNews() {
    allData.uk = [];
    scores.uk = [];

    var searchString = $("#topicInput")
      .val()
      .trim();

    var queryURL =
      "https://newsapi.org/v2/everything?q=" +
      searchString +
      "&language=en&sortBy=relevancy&pageSize=10&sources=cbc-news&apiKey=6d89e0cfe1464879bbc8c29d636efd66";

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

        allData.uk.push(articleObj);

        // Average / total sentiment calc
      }
      var total = 0;
      for (var j = 0; j < allData.uk.length; j++) {
        total += allData.uk[j].score;
      }
      var average = total / allData.uk.length;

      var scoreObj = {
        total: total,
        average: average
      };
      scores.uk.push(scoreObj);
      sentScoreArray.push(scoreObj.average);
      ukSentimentScore = scoreObj.average;
      ukFlag = true;
    });
  }

  function canadaNews() {
    allData.canada = [];
    scores.canada = [];

    var searchString = $("#topicInput")
      .val()
      .trim();

    var queryURL =
      "https://newsapi.org/v2/everything?q=" +
      searchString +
      "&language=en&sortBy=relevancy&pageSize=10&sources=the-globe-and-mail&apiKey=6d89e0cfe1464879bbc8c29d636efd66";

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

        allData.canada.push(articleObj);

        // Average / total sentiment calc
      }
      var total = 0;
      for (var j = 0; j < allData.canada.length; j++) {
        total += allData.canada[j].score;
      }
      var average = total / allData.canada.length;

      var scoreObj = {
        total: total,
        average: average
      };
      scores.canada.push(scoreObj);
      sentScoreArray.push(scoreObj.average);
      canSentimentScore = scoreObj.average;
      canFlag = true;
      drawMapAfterAPIIngest();
    });
  }

  function australiaNews() {
    allData.australia = [];
    scores.australia = [];

    var searchString = $("#topicInput")
      .val()
      .trim();

    var queryURL =
      "https://newsapi.org/v2/everything?q=" +
      searchString +
      "&language=en&sortBy=relevancy&pageSize=10&sources=abc-news-au&apiKey=6d89e0cfe1464879bbc8c29d636efd66";

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

        allData.australia.push(articleObj);

        // Average / total sentiment calc
      }
      var total = 0;
      for (var j = 0; j < allData.australia.length; j++) {
        total += allData.australia[j].score;
      }
      var average = total / allData.australia.length;

      var scoreObj = {
        total: total,
        average: average
      };
      scores.australia.push(scoreObj);
      sentScoreArray.push(scoreObj.average);
      ausSentimentScore = scoreObj.average;
      ausFlag = true;
      drawMapAfterAPIIngest();
    });

    // console.log("Australia Array", australiaData);
  }

  function irelandNews() {
    allData.ireland = [];
    scores.ireland = [];

    var searchString = $("#topicInput")
      .val()
      .trim();

    var queryURL =
      "https://newsapi.org/v2/everything?q=" +
      searchString +
      "&language=en&sortBy=relevancy&pageSize=10&sources=the-irish-times&apiKey=6d89e0cfe1464879bbc8c29d636efd66";

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

        allData.ireland.push(articleObj);
      }
      // Average / total sentiment calc

      var total = 0;
      for (var j = 0; j < allData.ireland.length; j++) {
        total += allData.ireland[j].score;
      }
      var average = total / allData.ireland.length;

      var scoreObj = {
        total: total,
        average: average
      };
      scores.ireland.push(scoreObj);
      sentScoreArray.push(scoreObj.average);
      ireSentimentScore = scoreObj.average;
      ireFlag = true;
      drawMapAfterAPIIngest();
    });
  }

  function israelNews() {
    allData.israel = [];
    scores.israel = [];

    var searchString = $("#topicInput")
      .val()
      .trim();

    var queryURL =
      "https://newsapi.org/v2/everything?q=" +
      searchString +
      "&language=en&sortBy=relevancy&pageSize=10&sources=the-jerusalem-post&apiKey=6d89e0cfe1464879bbc8c29d636efd66";

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

        allData.israel.push(articleObj);
      }
      // Average / total sentiment calc

      var total = 0;
      for (var j = 0; j < allData.israel.length; j++) {
        total += allData.israel[j].score;
      }
      var average = total / allData.israel.length;

      var scoreObj = {
        total: total,
        average: average
      };
      scores.israel.push(scoreObj);
      isrSentimentScore = scoreObj.average;
      sentScoreArray.push(scoreObj.average);
      isrFlag = true;
      // console.log("isrSentimentScore: " + isrSentimentScore);
      console.log();
      drawMapAfterAPIIngest();
    });
  }

  function usaNews() {
    allData.usa = [];
    scores.usa = [];

    var searchString = $("#topicInput")
      .val()
      .trim();

    var queryURL =
      "https://newsapi.org/v2/everything?q=" +
      searchString +
      "&language=en&sortBy=relevancy&pageSize=10&sources=the-new-york-times&apiKey=6d89e0cfe1464879bbc8c29d636efd66";

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

        allData.usa.push(articleObj);
      }
      // Average / total sentiment calc

      var total = 0;
      for (var j = 0; j < allData.usa.length; j++) {
        total += allData.usa[j].score;
      }
      var average = total / allData.usa.length;

      var scoreObj = {
        total: total,
        average: average
      };
      scores.usa.push(scoreObj);
      sentScoreArray.push(scoreObj.average);
      usaSentimentScore = scoreObj.average;
      usaFlag = true;
      drawMapAfterAPIIngest();
    });
  }

  function indiaNews() {
    allData.india = [];
    scores.india = [];

    var searchString = $("#topicInput")
      .val()
      .trim();

    var queryURL =
      "https://newsapi.org/v2/everything?q=" +
      searchString +
      "&language=en&sortBy=relevancy&pageSize=10&sources=the-times-of-india&apiKey=6d89e0cfe1464879bbc8c29d636efd66";

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

        allData.india.push(articleObj);
      }
      // Average / total sentiment calc

      var total = 0;
      for (var j = 0; j < allData.india.length; j++) {
        total += allData.india[j].score;
      }
      var average = total / allData.india.length;

      var scoreObj = {
        total: total,
        average: average
      };
      scores.india.push(scoreObj);
      indSentimentScore = scoreObj.average;
      sentScoreArray.push(scoreObj.average);
      indFlag = true;
      drawMapAfterAPIIngest();
    });
  }

  function russiaNews() {
    allData.russia = [];
    scores.russia = [];

    var searchString = $("#topicInput")
      .val()
      .trim();

    var queryURL =
      "https://newsapi.org/v2/everything?q=" +
      searchString +
      "&language=en&sortBy=relevancy&pageSize=10&sources=rt&apiKey=6d89e0cfe1464879bbc8c29d636efd66";

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

        allData.russia.push(articleObj);
      }
      // Average / total sentiment calc

      var total = 0;
      for (var j = 0; j < allData.russia.length; j++) {
        total += allData.russia[j].score;
      }
      var average = total / allData.russia.length;

      var scoreObj = {
        total: total,
        average: average
      };
      scores.russia.push(scoreObj);
      rusSentimentScore = scoreObj.average;
      sentScoreArray.push(scoreObj.average);
      rusFlag = true;
      drawMapAfterAPIIngest();
    });
  }

  // ------------------------------------------------
});
