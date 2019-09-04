var data = localStorage.getItem("gdata");
var code;
console.log(data);

$.get("https://softechlab.herokuapp.com/code?data=" + data, function(data) {
  console.log(data);
  $(".mypanel").html(data);

  var x = data.toString();

  var res = x.replace(/<plaintext>/g, " ");
  console.log(res);
  code = res;
  $("#code").text(res);
});

var url = "https://softechlab.herokuapp.com/show?data=" + data;
console.log(url);
$("#frame").attr("src", url);

/**
 *
 * In this pen:
 * added scripts with CDN:
 *   -  //cdnjs.cloudflare.com/ajax/libs/codemirror/5.13.4/codemirror.js
 *   -  //cdnjs.cloudflare.com/ajax/libs/codemirror/5.13.4/mode/xml/xml.js
 *   -  //cdnjs.cloudflare.com/ajax/libs/codemirror/5.13.4/mode/css/css.js
 *   -  //cdnjs.cloudflare.com/ajax/libs/codemirror/5.13.4/mode/javascript/javascript.js
 *   -  //cdnjs.cloudflare.com/ajax/libs/codemirror/5.13.4/mode/htmlmixed/htmlmixed.js
 *
 */
// download_file
function dynamic_text() {
  return code;
}

function download_file(name, contents, mime_type) {
  mime_type = mime_type || "text/html";

  var blob = new Blob([contents], { type: mime_type });

  var dlink = document.createElement("a");
  dlink.download = name;
  dlink.href = window.URL.createObjectURL(blob);
  dlink.onclick = function(e) {
    // revokeObjectURL needs a delay to work properly
    var that = this;
    setTimeout(function() {
      window.URL.revokeObjectURL(that.href);
    }, 1500);
  };

  dlink.click();
  dlink.remove();
}
