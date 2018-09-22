// creating the modal to display news story info

window.allData = [];

$("#submitButton").on("click", function(event) {
  event.preventDefault();
  var modalBox = $("<div>");
  var closeButton = $("<button>");
  closeButton.text("Click here to close this modal");
  closeButton.addClass("closeModal");
  modalBox.text("Blah!");
  modalBox.addClass("modalBox");
  modalBox.append(closeButton);
  $(".grid-container").append(modalBox);
  console.log(modalBox);
  console.log(allData);
});

$(document).on("click", ".closeModal", function(event) {
  event.preventDefault();
  console.log("You clicked the close button");
  $("div").remove(".modalBox");
});
