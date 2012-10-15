$(document).ready(function() {
  $.get('data.json', function(data) {
    $("#content").append(data[window.location.hash].paper_url);
  });
});