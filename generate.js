var data = localStorage.getItem("gdata");

console.log(data);

$.get("https://softechlab.herokuapp.com/code?data=" + data, function(data) {
  console.log(data);
  $(".mypanel").html(data);
});
// var url1 =
//   "https://softechlab.herokuapp.com/show?data=[{%22top%22:10.78125,%22left%22:24.296875,%22width%22:788,%22height%22:665,%22type%22:%22button%22,%22class%22:%22btn-success%22,%22text%22:%22hello%22,%22fontsize%22:32,%22imageurl%22:%22https://i.imgur.com/99CDYxi.jpg%22}]";

var url = "https://softechlab.herokuapp.com/show?data=" + data;
console.log(url);
$("#frame").attr("src", url);
