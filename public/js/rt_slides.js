/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
  loadIntialRoll();
  $("#rightArrow").click(function() {
    moveRight();
  });
  $("#leftArrow").click(function() {
    moveLeft();
  });
});
function loadIntialRoll() {
  $("#leftArrow").hide();
  for (var i = 1, j = 15; i < 8 && j > 0; i++, j--) {
    $("#slide" + (i)).css("background-image", "url(../../public/images/roll/" + j + ".jpg)");
  }
}
function getFirstSlideNumber() {
  var url = $("#slide1").css("background-image"),
      name = url.split(".")[0].split("/")[url.split(".")[0].split("/").length - 1];
  return(Number(name));
}
function moveRight() {
  var firstSlideNumber = getFirstSlideNumber();
  if (firstSlideNumber < 9) {
    $("#rightArrow").hide();
  }
  if (firstSlideNumber > 1) {
    $("#leftArrow").show();
  }
  for (var i = 1, j = firstSlideNumber - 1; i < 8 && j > 0; i++, j--) {
    $("#slide" + (i)).css("background-image", "url(../../public/images/roll/" + j + ".jpg)");
  }
}
function moveLeft() {
  var firstSlideNumber = getFirstSlideNumber();
  if (firstSlideNumber > 13) {
    $("#leftArrow").hide();
  }
  if (firstSlideNumber < 8) {
    $("#rightArrow").show();
  }
  for (var i = 1, j = firstSlideNumber + 1; i < 8 && j > 0; i++, j--) {
    $("#slide" + (i)).css("background-image", "url(../../public/images/roll/" + j + ".jpg)");
  }
}