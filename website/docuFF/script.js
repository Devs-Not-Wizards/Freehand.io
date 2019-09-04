// submit contact form
$(document).ready(function() {
  $("#contactForm").bind("submit", function() {
    $.ajax({
      type: "POST",
      cache: false,
      url:
        "https://script.google.com/macros/s/AKfycbxWQcdEeHz9AYGMzPtqcG0OQrG7fVSFBkm0gtrlxi66dzJW_6ZH/exec",
      data: $(this).serializeArray(),
      success: function(data) {
        // If 200 OK
        alert("Success..");
      },
      error: function(xhr, text, error) {
        // If 40x or 50x; errors
        alert("Please try again after some time.");
      }
    });
    return false;
  });
});
