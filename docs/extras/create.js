var currSel = null;
var ser = "https://freehandio.herokuapp.com/predict?url=";
var ser2 = "https://freehandio.herokuapp.com/get_image?url=";
var imagelink = localStorage.getItem("url");
console.log(imagelink);
var url = ser + imagelink;
var url2 = ser2 + imagelink;
var sel;
var myClass;
var currSel;

console.log(url);
var gData;

$.getJSON(url, function(data) {
  gData = data;
  console.log(data);
  var text;
  for (i = 0; i < data.length; i++) {
    text += `<li>Dynamic
              ${data[i].type}
              ${data[i].id}
              <button class="${data[i].type}" id="${data[i].id}">select</button>
              </li>`;
  }
  $("#ShowImage").attr("src", url2);
  console.log(gData);
  $(".component_list").html(text);
  console.log(text);
  // $(`.${data[i].type}`).click(function() {
  //   alert("Hello from button!");
  // });
});

$(".component_list").on("click", ".input", function() {
  myClass = $(this).attr("class");

  var code = `<input type="text" placeholder="Enter the placeholder / Name of the input field" id="input_txt"/>`;
  $(".custom_list").html(code);
  // console.log(myClass);
  // console.log(code);
  currSel = $(this).attr("id");
  sel = myClass;
  console.log("Value of sel ---------->" + myClass);
});

$(".component_list").on("click", ".text", function() {
  myClass = $(this).attr("class");

  var code = `<input type="text" placeholder="Enter the content for the textbox" id="content"/>
  <input type="number" placeholder="Enter the font size in points" id="text_size"/>
  <p>
  <ul class="radio-buttons">
    <li>
      <input
        type="radio"
        class="input-radio"
        name="font_radio"
        id="font1"
        value="Courier"
        checked="checked"
      />
      <label
        for="font1"
        style="font-family: 'Courier New', Courier, monospace"
        >Courier : AaBbCcDdEeFfGgHh
      </label>
    </li>
    <li>
      <input
        type="radio"
        class="input-radio"
        name="font_radio"
        id="font2"
        value="Cursive"
      />
      <label for="font2" style="font-family: cursive"
        >Cursive : AaBbCcDdEeFfGgHh
      </label>
    </li>
    <li>
      <input
        type="radio"
        class="input-radio"
        name="font_radio"
        id="font3"
        value="Arial"
      />
      <label
        for="font3"
        style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
        >Arial : AaBbCcDdEeFfGgHh
      </label>
    </li>
    <li>
      <input
        type="radio"
        class="input-radio"
        name="font_radio"
        id="font4"
        value="Times"
      />
      <label
        for="font4"
        style="font-family: 'Times New Roman', Times, serif"
        >Times New Roman : AaBbCcDdEeFfGgHh
      </label>
    </li>
  </ul>
</p> `;
  $(".custom_list").html(code);
  // console.log(myClass);
  // console.log(code);
  myClass = $(this).attr("class");
  currSel = $(this).attr("id");
  sel = myClass;
  console.log("Value of sel ---------->" + myClass);
});

$(".component_list").on("click", ".button", function() {
  myClass = $(this).attr("class");

  var code = `<ul class="radio-buttons">
          <li>
            <input type="radio" class="input-radio" name="btn_radio" id="radio1" value="btn btn-primary" checked="checked">
            <label for="radio1"><button type="button" class="btn btn-primary">Primary</button></label>
          </li>
          <li>
            <input type="radio" class="input-radio" name="btn_radio" id="radio2" value="btn btn-outline-primary">
            <label for="radio2"><button type="button" class="btn btn-outline-primary">Primary</button>
            </label>
          </li>
          <li>
            <input type="radio" class="input-radio" name="btn_radio" id="radio3" value="radio3">
            <label for="radio3"><button type="button" class="btn btn-primary btn-sm">Primary</button></label>
          </li>
        </ul>
        <br/>
        <input type="text" placeholder="Enter Text For Button" id="button_text" />`;
  $(".custom_list").html(code);

  // console.log(myClass);
  //console.log(code);
  currSel = $(this).attr("id");
  sel = myClass;
  console.log("Value of sel ---------->" + myClass);
});
//new code
$(".component_list").on("click", ".image", function() {
  myClass = $(this).attr("class");

  var code = `  <p>
  <input type="number" placeholder="Enter height (in pixels)" id="img_ht" />
  <input type="number" placeholder="Enter width (in pixels)" id="img_wt" />
  <input type="text" placeholder="Enter image URL"  id="img_url" />
</p>`;
  $(".custom_list").html(code);
  //console.log(myClass);
  //console.log(code);
  img_ht = $("#img_ht").val();
  img_wt = $("#img_wt").val();
  img_url = $("#img_url").val();

  console.log(img_ht + img_url + img_wt);
  currSel = $(this).attr("id");
  sel = myClass;
  console.log("Value of sel ---------->" + myClass);
});
//end of new code

$("#submit").click(function() {
  sel = myClass;
  alert(`You have selected` + sel);
  //POST request here
  // console.log(`Global Access--------->` + gData[0].top);
  for (i = 0; i < gData.length; i++) {
    if (currSel === gData[i].id) {
      if (sel === "input") {
        gData[i].text = $("#input_txt").val();
        console.log(`Data entered-------->` + gData[i].text);
      }
      if (sel === "text") {
        gData[i].fontsize = $("#text_size").val();
        console.log(`Data entered: fontsize-------->` + gData[i].fontsize);
        gData[i].text = $("#content").val();
        console.log(`Data entered : text-------->` + gData[i].text);
        // font name can be added
        // font color can be added
      }
      if (sel === "button") {
        gData[i].class = $("input[name=btn_radio]:checked")
          .val()
          .toString();
        gData[i].text = $("#button_text").val();
        console.log(`Data entered: text-------->` + gData[i].text);

        console.log(`Data entered: class-------->` + gData[i].class);
      }
      if (sel === "image") {
        gData[i].height = $("#img_ht").val();
        console.log(`Data entered: height-------->` + gData[i].height);
        gData[i].width = $("#img_wt").val();
        console.log(`Data entered: width-------->` + gData[i].width);
        gData[i].imgurl = $("#img_url").val();
        console.log(`Data entered: imgurl-------->` + gData[i].imgurl);
      }
    }
  }
  console.log("JSON" + gData);
  data = JSON.stringify(gData);
  console.log(data);
  localStorage.setItem("gdata", data);
});
