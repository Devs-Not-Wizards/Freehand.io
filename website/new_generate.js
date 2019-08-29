var data = localStorage.getItem("gdata");

console.log(data);

$.get("https://softechlab.herokuapp.com/code?data=" + data, function(data) {
  console.log(data);
  $(".mypanel").html(data);
});

var url = "https://softechlab.herokuapp.com/show?data=" + data;
console.log(url);
$("#frame").attr("src", url);
