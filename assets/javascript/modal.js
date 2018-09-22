// creating the modal to display news story info

window.allData = [];

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

$("#submitButton").on("click", function(event) {
  event.preventDefault();
  console.log(allData);
});

$(document).on("click", ".closeModal", function(event) {
  event.preventDefault();
  console.log("You clicked the close button");
  $("div").remove(".modalBox");
});
