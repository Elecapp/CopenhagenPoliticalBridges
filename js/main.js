/*** AJAX PER IL LINK ***/

$("nav a").on("click", function(event) {
  event.preventDefault()

  const href = $(this).attr("href")

  window.history.pushState(null, null, href)

  $.ajax({
    url: href,
    success: function(data) {
      $("main").fadeOut(400, function() {
        const newPage = $(data).filter("main").html()

        $("main").html(newPage)

        $("main").fadeIn(400)
      })
    }
  })
});

/*** SIDEBAR ***/
$(document).ready(function() {

  $("#sidebar").mCustomScrollbar({
    theme: "minimal"
  });

  $('#sidebarCollapse').on('click', function() {
    $('#sidebar').toggleClass('active');
  });

});

$(document).ready(function() {

  $("#sidebar").mCustomScrollbar({
    theme: "minimal"
  });

  $('#sidebarCollapse').on('click', function() {
    // open or close navbar
    $('#sidebar').toggleClass('active');
    // close dropdowns
    $('.collapse.in').toggleClass('in');
    // and also adjust aria-expanded attributes we use for the open/closed arrows
    // in our CSS
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });

});
