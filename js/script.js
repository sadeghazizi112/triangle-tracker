var angleSUM;
var angleONE;
var angleTWO;
var angleTHREE;

$(document).ready(function() {
  $("#equilateral, #isosceles, #scalene, #not-triangle").hide();
  $("form#angleSUM").submit(function(event) {
     angleONE = parseInt($("#angle1").val());
     angleTWO = parseInt($("input#angle2").val());
     angleTHREE = parseInt($("input#angle3").val());
     angleSUM = angleONE + angleTWO + angleTHREE;

if (angleSUM != 180 || (angleONE === 0) || (angleTWO === 0) || (angleTHREE === 0)) {
    $('#not-triangle').show();
}
else {
  if (angleONE === angleTWO && angleTWO === angleTHREE) {
    $('#equilateral').show();
    console.log("equilateral");
  }
  if (angleONE === angleTWO && angleTWO != angleTHREE) {
    $('#isosceles').show();
      console.log("isosceles");
  }
  if (angleONE === angleTHREE && angleONE != angleTWO) {
    $('#isosceles').show();
      console.log("isosceles");
  }
  if (angleTWO === angleTHREE && angleONE != angleTHREE) {
    $('#isosceles').show();
      console.log("isosceles");
  }
  if (angleONE != angleTWO && angleTWO != angleTHREE) {
    $('#scalene').show();
      console.log("scalene");
  }
}
  event.preventDefault();
});


});
