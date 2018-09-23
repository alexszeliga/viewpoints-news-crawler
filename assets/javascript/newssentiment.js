// Script to pull in news sources from NewsAPI by country and then run sentiment analysis and store data in allData.

$(document).ready(function () {
    // ------------------------VARIABLES------------------------


    window.allData = {
        "qatar": [],
        "uk": [],
        "canada": [],
        "australia": [],
        "ireland": [],
        "isreal": [],
        "usa": [],
        "india": [],
        "russia": []
    }

    window.scores = {
        "qatar": [],
        "uk": [],
        "canada": [],
        "australia": [],
        "ireland": [],
        "isreal": [],
        "usa": [],
        "india": [],
        "russia": []
    }

    

    // ------------------------ON CLICK EVENT HANDLE------------------------


    $("#submitButton").on("click", function (event) {

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
        console.log(scores);

    });



    // ------------------------UNDERLYING FUNCTIONS------------------------


    //  THESE ARE THE FUNCTIONS TO GET NEWS FOR EACH COUNTRY RUN THE SENTIMENT ANALYSIS AND THEN RETURN AN ARRAY OF OBJECTS FOR EACH CONTRY //

    function qatarNews() {

        allData.qatar = [];
        scores.qatar = [];

        var searchString = $("#topicInput").val().trim();

        var queryURL = "https://newsapi.org/v2/everything?q=" + searchString + "&language=en&sortBy=relevancy&pageSize=100&sources=al-jazeera-english&apiKey=2877da71f97e4fa28fd788acd1887709";


        $.ajax({
            url: queryURL,
            METHOD: "GET",
            language: 'en',
        }).then(function (response) {

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
                }

                allData.qatar.push(articleObj);

                // Average / total sentiment calc 

                var total = 0;
                for (var j = 0; j < allData.qatar.length; j++) {
                    total +=allData.qatar[j].score;
                }
                var average = total / allData.qatar.length;
                
                var scoreObj = {
                    total: total,
                    average: average
                }
                scores.qatar.push(scoreObj);

            }

        });

    };

    function ukNews() {

        allData.uk = [];
        scores.uk = [];

        var searchString = $("#topicInput").val().trim();

        var queryURL = "https://newsapi.org/v2/everything?q=" + searchString + "&language=en&sortBy=relevancy&pageSize=100&sources=bbc-news&apiKey=2877da71f97e4fa28fd788acd1887709";


        $.ajax({
            url: queryURL,
            METHOD: "GET",
            language: 'en',
        }).then(function (response) {

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
                }

                allData.uk.push(articleObj);

                 // Average / total sentiment calc 

                 var total = 0;
                 for (var j = 0; j < allData.uk.length; j++) {
                     total +=allData.uk[j].score;
                 }
                 var average = total / allData.uk.length;
                 
                 var scoreObj = {
                     total: total,
                     average: average
                 }
                 scores.uk.push(scoreObj);
 

            }
        });

    };

    function canadaNews() {

        allData.canada = [];
        scores.canada = [];

        var searchString = $("#topicInput").val().trim();

        var queryURL = "https://newsapi.org/v2/everything?q=" + searchString + "&language=en&sortBy=relevancy&pageSize=100&sources=the-globe-and-mail&apiKey=2877da71f97e4fa28fd788acd1887709";


        $.ajax({
            url: queryURL,
            METHOD: "GET",
            language: 'en',
        }).then(function (response) {

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
                }

                allData.canada.push(articleObj);

                // Average / total sentiment calc 

                var total = 0;
                for (var j = 0; j < allData.canada.length; j++) {
                    total +=allData.canada[j].score;
                }
                var average = total / allData.canada.length;
                
                var scoreObj = {
                    total: total,
                    average: average
                }
                scores.canada.push(scoreObj);

            }
        });

    };

    function australiaNews() {

        allData.australia = [];
        scores.australia = [];

        var searchString = $("#topicInput").val().trim();

        var queryURL = "https://newsapi.org/v2/everything?q=" + searchString + "&language=en&sortBy=relevancy&pageSize=100&sources=abc-news-au&apiKey=2877da71f97e4fa28fd788acd1887709";


        $.ajax({
            url: queryURL,
            METHOD: "GET",
            language: 'en',
        }).then(function (response) {

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
                }

                allData.australia.push(articleObj);

                // Average / total sentiment calc 

                var total = 0;
                for (var j = 0; j < allData.australia.length; j++) {
                    total +=allData.australia[j].score;
                }
                var average = total / allData.australia.length;
                
                var scoreObj = {
                    total: total,
                    average: average
                }
                scores.australia.push(scoreObj);

            }
        });

        // console.log("Australia Array", australiaData);

    };

    function irelandNews() {

        allData.ireland = [];
        scores.ireland = [];

        var searchString = $("#topicInput").val().trim();

        var queryURL = "https://newsapi.org/v2/everything?q=" + searchString + "&language=en&sortBy=relevancy&pageSize=100&sources=the-irish-times&apiKey=2877da71f97e4fa28fd788acd1887709";


        $.ajax({
            url: queryURL,
            METHOD: "GET",
            language: 'en',
        }).then(function (response) {

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
                }

                allData.ireland.push(articleObj);

                // Average / total sentiment calc 

                var total = 0;
                for (var j = 0; j < allData.ireland.length; j++) {
                    total +=allData.ireland[j].score;
                }
                var average = total / allData.ireland.length;
                
                var scoreObj = {
                    total: total,
                    average: average
                }
                scores.ireland.push(scoreObj);

            }
        });

    };

    function isrealNews() {

        allData.isreal = [];
        scores.isreal = [];

        var searchString = $("#topicInput").val().trim();

        var queryURL = "https://newsapi.org/v2/everything?q=" + searchString + "&language=en&sortBy=relevancy&pageSize=100&sources=the-jerusalem-post&apiKey=2877da71f97e4fa28fd788acd1887709";


        $.ajax({
            url: queryURL,
            METHOD: "GET",
            language: 'en',
        }).then(function (response) {

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
                }

                allData.isreal.push(articleObj);

                // Average / total sentiment calc 

                var total = 0;
                for (var j = 0; j < allData.isreal.length; j++) {
                    total +=allData.isreal[j].score;
                }
                var average = total / allData.isreal.length;
                
                var scoreObj = {
                    total: total,
                    average: average
                }
                scores.isreal.push(scoreObj);

            }
        });

    };

    function usaNews() {

        allData.usa = [];
        scores.usa = [];

        var searchString = $("#topicInput").val().trim();

        var queryURL = "https://newsapi.org/v2/everything?q=" + searchString + "&language=en&sortBy=relevancy&pageSize=100&sources=the-new-york-times&apiKey=2877da71f97e4fa28fd788acd1887709";


        $.ajax({
            url: queryURL,
            METHOD: "GET",
            language: 'en',
        }).then(function (response) {

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
                }

                allData.usa.push(articleObj);

                // Average / total sentiment calc 

                var total = 0;
                for (var j = 0; j < allData.usa.length; j++) {
                    total +=allData.usa[j].score;
                }
                var average = total / allData.usa.length;
                
                var scoreObj = {
                    total: total,
                    average: average
                }
                scores.usa.push(scoreObj);

            }
        });

    };

    function indiaNews() {

        allData.india = [];
        scores.india = [];

        var searchString = $("#topicInput").val().trim();

        var queryURL = "https://newsapi.org/v2/everything?q=" + searchString + "&language=en&sortBy=relevancy&pageSize=100&sources=the-times-of-india&apiKey=2877da71f97e4fa28fd788acd1887709";

        $.ajax({
            url: queryURL,
            METHOD: "GET",
            language: 'en',
        }).then(function (response) {

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
                }

                allData.india.push(articleObj);

                // Average / total sentiment calc 

                var total = 0;
                for (var j = 0; j < allData.india.length; j++) {
                    total +=allData.india[j].score;
                }
                var average = total / allData.india.length;
                
                var scoreObj = {
                    total: total,
                    average: average
                }
                scores.india.push(scoreObj);

            }
        });

    };

    function russiaNews() {

        allData.russia = [];
        scores.russia = [];

        var searchString = $("#topicInput").val().trim();

        var queryURL = "https://newsapi.org/v2/everything?q=" + searchString + "&language=en&sortBy=relevancy&pageSize=100&sources=rt&apiKey=2877da71f97e4fa28fd788acd1887709";


        $.ajax({
            url: queryURL,
            METHOD: "GET",
            language: 'en',
        }).then(function (response) {

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
                }

                allData.russia.push(articleObj);

                // Average / total sentiment calc 

                var total = 0;
                for (var j = 0; j < allData.russia.length; j++) {
                    total +=allData.russia[j].score;
                }
                var average = total / allData.russia.length;
                
                var scoreObj = {
                    total: total,
                    average: average
                }
                scores.russia.push(scoreObj);

            }
        });

    };

    // ------------------------------------------------
});