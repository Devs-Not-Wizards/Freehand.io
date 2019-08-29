var data = localStorage.getItem("gdata");
var code;
console.log(data);

$.get("https://softechlab.herokuapp.com/code?data=" + data, function(data) {
  console.log(data);
  $(".mypanel").html(data);
  code = data;
  var x = data.toString();

  var res = x.replace(/<plaintext>/g, " ");
  console.log(res);

  $("#code").text(res);
});

var url = "https://softechlab.herokuapp.com/show?data=" + data;
console.log(url);
$("#frame").attr("src", url);
$(document).ready(function() {
  // $("#code").click(function() {
  //   alert("This paragraph was clicked.");
  //   $("#frame").html(code);
  // });
});
