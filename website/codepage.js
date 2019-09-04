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
var code;
var htmlEditor = CodeMirror.fromTextArea(document.getElementById("code"), {
  lineNumbers: true,
  mode: "htmlmixed",
  // theme: 'default',
  tabSize: 5,
  lineNumbers: true,

  extraKeys: { "Ctrl-Space": "autocomplete" }
});

var data = localStorage.getItem("gdata");
var code;
console.log(data);

$.get("https://softechlab.herokuapp.com/code?data=" + data, function(data) {
  console.log(data);

  var x = data.toString();

  var res = x.replace(/<plaintext>/g, " ");
  code = res;
  console.log(res);
  htmlEditor.setValue(res);
  $("#code").text(res);
});
