
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

/*** MAPS BUTTONS ***/
let map0 = document.getElementById("STATIC")
let map1 = document.getElementById("TYPE");
let map2 = document.getElementById("TOPIC");
let map3 = document.getElementById("FOOD");
let map4 = document.getElementById("IMAGES");
let map5 = document.getElementById("AREAS");
let map6 = document.getElementById("SERVICE");

let testo0 = document.getElementById("TESTO0");
let testo1 = document.getElementById("TESTOTYPE");
let testo2 = document.getElementById("TESTOTOPIC");
let testo3 = document.getElementById("TESTOFOOD");
let testo4 = document.getElementById("TESTOIMAGES");
let testo5 = document.getElementById("TESTOAREA");
let testo6 = document.getElementById("TESTOSERVICE");


function toggleTYPE() {
    map0.classList.add("is-hidden");
    map1.classList.remove("is-hidden");
    map2.classList.add("is-hidden");
    map3.classList.add("is-hidden");
    map4.classList.add("is-hidden");
    map5.classList.add("is-hidden");
    map6.classList.add("is-hidden");
    map1.src = "assets/map_TYPE.png";

    testo0.classList.add("is-hidden");
    testo1.classList.remove("is-hidden");
    testo2.classList.add("is-hidden");
    testo3.classList.add("is-hidden");
    testo4.classList.add("is-hidden");
    testo5.classList.add("is-hidden");
    testo6.classList.add("is-hidden");


};

function toggleTOPIC() {
  map0.classList.add("is-hidden");
  map1.classList.add("is-hidden");
  map2.classList.remove("is-hidden");
  map3.classList.add("is-hidden");
  map4.classList.add("is-hidden");
  map5.classList.add("is-hidden");
  map6.classList.add("is-hidden");
    map2.src = "assets/map_TOPIC.png";
};

function toggleFOOD() {
  map0.classList.add("is-hidden");
  map1.classList.add("is-hidden");
  map2.classList.add("is-hidden");
  map3.classList.remove("is-hidden");
  map4.classList.add("is-hidden");
  map5.classList.add("is-hidden");
  map6.classList.add("is-hidden");
    map3.src = "assets/map_FOOD.png";
};

function toggleIMAGES() {
  map0.classList.add("is-hidden");
  map1.classList.add("is-hidden");
  map2.classList.add("is-hidden");
  map3.classList.add("is-hidden");
  map4.classList.remove("is-hidden");
  map5.classList.add("is-hidden");
  map6.classList.add("is-hidden");
    map4.src = "assets/map_IMAGES.png";
};
function toggleAREA() {
  map0.classList.add("is-hidden");
  map1.classList.add("is-hidden");
  map2.classList.add("is-hidden");
  map3.classList.add("is-hidden");
  map4.classList.add("is-hidden");
  map5.classList.remove("is-hidden");
  map6.classList.add("is-hidden");
    map5.src="assets/map_AREA.png";

}
function toggleSERVICE() {
  map0.classList.add("is-hidden");
  map1.classList.add("is-hidden");
  map2.classList.add("is-hidden");
  map3.classList.add("is-hidden");
  map4.classList.add("is-hidden");
  map5.classList.add("is-hidden");
  map6.classList.remove("is-hidden");
    map6.src="assets/map_AREA.png";

}
