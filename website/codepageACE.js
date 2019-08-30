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

// the function is called at the end of a function that
// includes a getJSON() request to a Python script which
// queries a MongoDB database and json dumps the results.
// eg loadMyContent() {
// getJSON() and return content
initAceEditor();
// }

// Problems when using div instead of xmp:

// In Firebug I can *see* the required HTML in the 'response'
// and 'json' tabs ie:
// <div id="acey_html_hidden"><html>test</html></div>
// but the Ace edior is just showing:
// test

// In Firebug's HTML view of the hidden div, when using <div> tags, the <html> tags have been stripped out.  When using <xmp> tags the <html> tags have not been stripped out.
