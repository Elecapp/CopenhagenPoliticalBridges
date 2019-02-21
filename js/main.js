/*** AJAX PER IL LINK
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
});***/

/*** MAPS BUTTONS ***/
let map0 = document.getElementById("STATIC")
let map1 = document.getElementById("TYPE");
let map2 = document.getElementById("TOPIC");
let map3 = document.getElementById("FOOD");
let map4 = document.getElementById("IMAGES");

function toggleTYPE() {
    map0.classList.add("is-hidden");
    map1.classList.remove("is-hidden");
    map2.classList.add("is-hidden");
    map3.classList.add("is-hidden");
    map4.classList.add("is-hidden");
    map1.src = "assets/map_TYPE.png";
};

function toggleTOPIC() {
  map0.classList.add("is-hidden");
  map1.classList.add("is-hidden");
  map2.classList.remove("is-hidden");
  map3.classList.add("is-hidden");
  map4.classList.add("is-hidden");
    map2.src = "assets/map_TOPIC.png";
};

function toggleFOOD() {
  map0.classList.add("is-hidden");
  map1.classList.add("is-hidden");
  map2.classList.add("is-hidden");
  map3.classList.remove("is-hidden");
  map4.classList.add("is-hidden");
    map3.src = "assets/map_FOOD.png";
};

function toggleIMAGES() {
  map0.classList.add("is-hidden");
  map1.classList.add("is-hidden");
  map2.classList.add("is-hidden");
  map3.classList.add("is-hidden");
  map4.classList.remove("is-hidden");
    map4.src = "assets/map_IMAGES.png";
};
