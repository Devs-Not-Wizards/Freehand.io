// comments represent dynamic environment set up

// this is in an external js file
var code;
$(document).ready(function() {
  var data = localStorage.getItem("gdata");

  console.log(data);

  $.get("https://softechlab.herokuapp.com/code?data=" + data, function(data) {
    console.log(data);

    var x = data.toString();

    var res = x.replace(/<plaintext>/g, " ");
    code = res;
    console.log(res);

    $("#my_html_hidden").text(res);
    initAceEditor();
  });
});
function initAceEditor() {
  var html_editor = ace.edit("editor");
  html_editor.setTheme("ace/theme/gruvbox");
  html_editor.getSession().setMode("ace/mode/html");
  html_editor.setFontSize("15px");
  html_editor.setPrintMarginColumn(false);
  html_editor.session.setValue($("#my_html_hidden").text());
  html_editor.setOptions({
    maxLines: 20
  });
}

initAceEditor();
// }
