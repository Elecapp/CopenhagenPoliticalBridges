/*** AJAX PER IL LINK ***/


/*** SIDEBAR ***/

  
$(document).ready(function() {


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



});
