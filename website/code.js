var cdata = localStorage.getItem("gdata");

console.log(cdata);

$(function() {
  $(document).ready(function() {
    console.log("ready!");
    $.get("https://softechlab.herokuapp.com/code?data=" + cdata, function(
      cdata
    ) {
      console.log(cdata);

      $("#mypanel").append(cdata);
    });
  });

  $(".loader-div")
    .delay(1000)
    .fadeOut();

  var editorOptions = {
    autoRefresh: true,
    firstLineNumber: 1,
    lineNumbers: true,
    lineWrapping: true,
    smartIndent: true,
    indentWithTabs: true,
    styleActiveLine: { nonEmpty: true },
    matchBrackets: true,
    matchTags: { bothTags: true },
    findMatchingBrackets: true,
    extraKeys: {
      "Ctrl-M": "toMatchingTag",
      "Shift-Ctrl-C": "toggleComment",
      "Ctrl-/": "toggleComment",
      "Ctrl-D": "pageDown"
    },
    refresh: true,
    viewportMargin: Infinity
  };

  var links = `
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"></link>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"><\/script>
	<script id="set_jquery">var $ = parent.$;<\/script>
	`;
  var widget_settings = `<div class="widget-settings"><div class="code-mode-wrap"><select class="form-control form-control-sm code-mode"><option value="js" data-lang="javascript" data-l-sm="js">JavaScript</option><option value="html" data-lang="htmlmixed" data-l-sm="html">HTML</option><option value="css" data-lang="css" data-l-sm="css">CSS</option><option value="php" data-lang="text/x-php" data-l-sm="php">PHP</option></select></div><select class="form-control form-control-sm read-only"><option data-readonly="false" value="false">edit</option><option data-readonly="true" value="true">read-only</option></select><div class="edit-tab"></div><div class="add-bookmark"></div><div class="add-callout"></div></div>`;

  var widget_data = [
    {
      readOnly: true
    },
    {
      readOnly: false
    },
    {
      readOnly: true
    }
  ];

  var modal = $(".modal");
  var count = 0;
  var widget = $(document).find(".widget");
  widget.each(function() {
    var inner = $(this).find(".widget-inner");
    inner.each(function() {
      var self = $(this);
      // prepend the settings: change code mode, switch between readonly / edit mode...
      self.prepend(widget_settings);
      // get the editor
      var editor = CodeMirror.fromTextArea(
        self.find(".editor")[0],
        editorOptions
      );
      self[0].editor = editor;
      console.log(self[0]);
      editor.save();

      var codeMode = self.find(".new-inner").attr("data-language");
      var i = self.attr("data-inner");

      // beautify the code
      var sampleText = self.find(".editor").text();
      var beautify = eval((codeMode + "_beautify").toString().toLowerCase());
      editor.setValue(beautify(sampleText, { indent_size: 2 }));

      // set readonly / edit mode
      var readOnly = widget_data[i].readOnly;
      self.find(".read-only").val(readOnly.toString());
      editor.setOption("readOnly", readOnly);

      // set the code mode
      self.find(".code-mode").val(codeMode);
      var setMode = self
        .find(".code-mode")
        .find(":selected")
        .attr("data-lang");
      editor.setOption("mode", setMode);

      // set minimum number of lines
      var minLines = 10;
      editor.focus();
      editor.setCursor(editor.lineCount(), 0); // Set the cursor at the end of existing content
      var lineCount = editor.lineCount(); // current number of lines
      var n = minLines - lineCount; // how many lines we need
      var line = editor.getCursor().line;
      var ch = editor.getCursor().ch;
      for (i = 0; i < n; i++) {
        editor.replaceRange("\n", { line });
        line++;
      }
    });
  });

  // update iframe on keyup
  $(document).on("keyup", ".CodeMirror", function() {
    var widget = $(this).closest(".widget");
    var iframe = widget.find("iframe");
    var win = iframe[0].contentWindow;
    var doc = win.document;
    var tagArray = [];

    var el = widget.find(".widget-inner");
    el.each(function() {
      var self = $(this);
      var inner = self.find(".new-inner");
      var editor = self[0].editor;
      var i = self.attr("data-inner");
      var type = inner.attr("data-language");
      var content = editor.getValue();
      var tag = inner.attr("data-tag");
      var full = "<" + tag + ' id="' + i + '">' + content + "</" + tag + ">";

      var tagStuff = {
        i: i,
        type: type,
        content: content,
        tag: tag,
        full: full
      };
      tagArray.push(tagStuff);
    });

    doc.open();
    doc.close();
    $("head", doc)
      .empty()
      .append(links);

    $.each(tagArray, function(index, tagStuff) {
      switch (tagStuff.type) {
        case "js":
          $("body", doc).append(tagStuff.full);
          break;
        case "css":
          $("head", doc).append(tagStuff.full);
          break;
        case "html":
          $("body", doc).prepend(tagStuff.full);
          break;
      }
    });
  });
  function setIframe() {
    var widget = $(".widget");
    var iframe = widget.find("iframe");
    var head = iframe.contents().find("head");
    var body = iframe.contents().find("body");

    head.append(links);
    body.append('<div class="wrapper"></div>');
    var wrapper = iframe.contents().find(".wrapper");

    widget.each(function() {
      var inner = $(this).find(".widget-inner");
      inner.each(function() {
        var self = $(this);
        var editor = self[0].editor;
        var data = self.find(".new-inner").attr("data-language");
        var i = self.attr("data-inner");
        // for each editor, we will add the corresponding tag, html goes in the '.wrapper'
        switch (data) {
          case "js":
            body.append(
              '<script id="' + i + '">' + editor.getValue() + "</script>"
            );
            break;
          case "html":
            wrapper.html(editor.getValue());
            break;
          case "css":
            head.append(
              '<style id="' + i + '">' + editor.getValue() + "</style>"
            );
            break;
        }
      });
    });
  }
  setIframe();

  $(document).on("click", ".add-tab", function() {
    var highest = 0;
    // find the highest tab number, and increase it by one.
    var widget = $(this).closest(".widget");
    widget.find(".widget-tab").each(function() {
      var num = parseInt($(this).attr("data-tab"), 10);
      highest = Math.max(highest, parseFloat(num));
    });
    // append the new tab before the '.add-tab' element
    widget
      .find(".add-tab")
      .before(
        '<div class="widget-tab" data-tab="' +
          (highest + 1) +
          '"><label class="tab-text">new<span>.js</span></label><div class="tab-delete"></div></div>'
      );
    // append the new tab panel, doesn't matter "where" it goes
    var inner = $(
      `<div class="widget-inner" data-inner="` +
        (highest + 1) +
        `"> 
				<div class="new-inner" data-language="js" data-tag="script"> 
					<textarea class="editor" style="display: none;"></textarea> 
					<div class="CodeMirror-vscrollbar-filler"></div> 
					<div class="CodeMirror-hscrollbar-filler"></div> 
				</div>
			</div>`
    );
    widget.find(".preview").before(inner);
    inner.prepend(widget_settings);

    var editor = CodeMirror.fromTextArea(
      inner.find(".editor")[0],
      editorOptions
    );
    inner[0].editor = editor;
    editor.setOption("mode", "javascript");
    console.log(inner[0]);
    editor.save();

    var iframe = widget.find("iframe");
    iframe
      .contents()
      .find("body")
      .append('<script id="' + (highest + 1) + '"></script>');
  });

  $(document).on("change", ".code-mode", function() {
    var widget = $(this).closest(".widget");
    var iframe = widget.find("iframe");
    var inner = $(this).closest(".widget-inner");
    var data = inner.attr("data-inner");
    var tab = widget.find('.widget-tab[data-tab="' + data + '"]');
    var language = $(this)
      .find(":selected")
      .attr("data-lang");
    var lsm = $(this)
      .find(":selected")
      .attr("data-l-sm");
    var editor = inner[0].editor;
    editor.setOption("mode", language);
    console.log(editor);

    inner.find(".new-inner").attr("data-language", lsm);
    inner.find(".CodeMirror").attr("data-language", lsm);
    tab.find("span").text("." + lsm);

    switch (lsm) {
      case "js":
        inner.find(".new-inner").attr("data-tag", "script");
        if (iframe.contents().find('[id="' + data + '"]').length > 0) {
          iframe
            .contents()
            .find('[id="' + data + '"]')
            .replaceWith(
              $('<script id="' + data + '">' + editor.getValue() + "</script>")
            );
          iframe
            .contents()
            .find('[id="' + data + '"]')
            .detach()
            .appendTo(iframe.contents().find("body"));
        } else {
          iframe
            .contents()
            .find("body")
            .append(
              $('<script id="' + data + '">' + editor.getValue() + "</script>")
            );
        }
        break;
      case "css":
        inner.find(".new-inner").attr("data-tag", "style");
        if (iframe.contents().find('[id="' + data + '"]').length > 0) {
          iframe
            .contents()
            .find('[id="' + data + '"]')
            .replaceWith(
              $('<style id="' + data + '">' + editor.getValue() + "</style>")
            );
          iframe
            .contents()
            .find('[id="' + data + '"]')
            .detach()
            .appendTo(iframe.contents().find("head"));
        } else {
          iframe
            .contents()
            .find("head")
            .append(
              $('<style id="' + data + '">' + editor.getValue() + "</style>")
            );
        }
        break;
      case "html":
        inner.find(".new-inner").attr("data-tag", "wrapper");
        if (iframe.contents().find('[id="' + data + '"]').length > 0) {
          iframe
            .contents()
            .find('[id="' + data + '"]')
            .remove();
        } else {
          iframe
            .contents()
            .find(".wrapper")
            .html(editor.getValue());
        }
        break;
    }
  });
  $(document).on("change", ".read-only", function() {
    var inner = $(this).closest(".widget-inner");
    var editor = inner[0].editor;
    var readOnly = $(this)
      .find(":selected")
      .attr("data-readonly");
    var bool = $.parseJSON(readOnly);

    editor.setOption("readOnly", bool);
    inner.find(".code-callout input").attr("disabled", bool);
  });

  // switch tabs
  $(document).on("click", ".widget-tab", function() {
    var tab = $(this);
    var data = tab.attr("data-tab");
    var panel = tab
      .closest(".widget")
      .find('.widget-inner[data-inner="' + data + '"]');
    if (!tab.hasClass("tab-active")) {
      tab.siblings().removeClass("tab-active");
      tab.addClass("tab-active");
      panel.siblings(".widget-inner").removeClass("panel-active");
      panel.addClass("panel-active");
    }
  });

  // remove tab
  $(document).on("click", ".tab-delete", function() {
    var tab = $(this).closest(".widget-tab");
    var widget = tab.closest(".widget");
    var iframe = widget.find("iframe");
    var data = tab.attr("data-tab");
    var lsm = widget
      .find('.widget-inner[data-inner="' + data + '"]')
      .find(".new-inner")
      .attr("data-language");
    var panel = widget.find('.widget-inner[data-inner="' + data + '"]');
    if (widget.find(".widget-tab").length > 1) {
      if (tab.hasClass("tab-active")) {
        tab.remove();
        panel.remove();
        widget.find(".widget-tab:first").addClass("tab-active");
        var newData = widget.find(".widget-tab:first").attr("data-tab");
        var newPanel = widget.find(
          '.widget-inner[data-inner="' + newData + '"]'
        );
        newPanel.addClass("panel-active");
      } else {
        tab.remove();
        panel.remove();
        newPanel.addClass("panel-active");
      }
    }
    // remove corresponding iframe tag
    iframe
      .contents()
      .find('[id="' + data + '"]')
      .remove();
    if (lsm == "html") {
      console.log("true");
      // we will just empty the body wrapper
      iframe
        .contents()
        .find("wrapper")
        .empty();
    }
  });

  // edit tab name
  var tabText = null;
  $(document).on("click", ".edit-tab", function() {
    var widget = $(this).closest(".widget");
    var active = widget.find(".panel-active");
    var data = active.attr("data-inner");
    var tab = widget.find('.widget-tab[data-tab="' + data + '"]');
    tabText = tab.find(".tab-text");
    // modal
    var lang = active.find(".new-inner").attr("data-language");
    var type = modal.find(".tab-type");
    type.html("." + lang);
    modal.show();
    $(document).on("click", ".modal-save", function() {
      var newName = modal.find(".file-name-input").val();
      tabText.html(newName + "<span>." + lang + "</span>");
      modal.hide();
    });
  });

  $(document).on("click", ".modal-close-btn", function() {
    modal.hide();
  });

  // to matching bracket end
  $(document).on("keydown", ".CodeMirror", function(e) {
    var inner = $(this).closest(".widget-inner");
    var editor = inner[0].editor;
    var Pos = CodeMirror.Pos;
    if (
      (e.metaKey || e.ctrlKey) &&
      String.fromCharCode(e.which).toLowerCase() === "m"
    ) {
      editor.extendSelectionsBy(function(range) {
        var next = editor.scanForBracket(range.head, 1);
        if (next && CodeMirror.cmpPos(next.pos, range.head) != 0) {
          return next.pos;
        } else {
          var prev = editor.scanForBracket(range.head, -1);
          return (prev && Pos(prev.pos.line, prev.pos.ch + 1)) || range.head;
        }
      });
    }
    if ((e.metaKey || e.ctrlKey) && e.which == 13) {
      var mode = inner.find(".new-inner").attr("data-language");
      var text = editor.getValue();
      var beautify = eval((mode + "_beautify").toString().toLowerCase());
      editor.setValue(beautify(text, { indent_size: 2 }));
    }
  });

  // append a bookmark to the line
  $(document).on("mousedown", ".add-bookmark", function() {
    var inner = $(this).closest(".widget-inner");
    var editor = inner[0].editor;
    var cmWidget = document.createElement("span");
    var line = editor.getCursor();
    cmWidget.className = "bookmark";
    editor.setBookmark(editor.getCursor(), cmWidget, true);
  });
  $(document).on("click", ".bookmark", function() {
    var bookmark = $(this);
    bookmark.remove();
  });

  $(document).on("mousedown", ".add-callout", function() {
    var inner = $(this).closest(".widget-inner");
    var editor = inner[0].editor;

    var el = $(
      '<div class="code-callout" data-callout="danger"><input type="text" placeholder="type something..."/><label></label></div>'
    )[0];

    var line = editor.getCursor().line;
    var ch = editor.getCursor().ch;
    var isEmptyLine = editor.getLine(line).trim() === "";
    if (isEmptyLine) {
      // if line is empty we insert the widget here
      editor.replaceRange(" ", { line });
    } else if (ch === 0) {
      // if character position is zero, don't do anything
      editor.replaceRange(" " + "\n", pos);
    } else {
      // if line has content, insert widget on new line
      editor.replaceRange("\n" + " ", { line });
      line++;
    }
    var widget = editor.markText(
      { line, ch: 0 },
      { line, ch: 1 },
      {
        replacedWith: el
      }
    );
    editor.focus();
  });

  $(document).on("click", ".code-callout > label", function() {
    var parent = $(this).closest(".code-callout");
    var data = parent.attr("data-callout");
    switch (data) {
      case "danger":
        parent.attr("data-callout", "warning");
        break;
      case "warning":
        parent.attr("data-callout", "info");
        break;
      case "info":
        parent.attr("data-callout", "good");
        break;
      case "good":
        parent.attr("data-callout", "danger");
        break;
    }
  });

  $(".widget-inner").resizable({
    handles: "s",
    resize: function(event, ui) {
      var sibs = $(this).siblings(".widget-inner");
      sibs.height($(this).height());
      // var parent = $(this).closest('.widget');
      // var self = $(this);
      // var editor = parent.find('.CodeMirror');
      // editor.height( parent.height() - self.height() );
    }
  });
});
