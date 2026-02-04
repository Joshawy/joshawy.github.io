(function(){
  var year = document.getElementById("year");
  if(year) year.textContent = new Date().getFullYear();

  var btn = document.querySelector(".menu-btn");
  var nav = document.querySelector("#site-nav");
  if(btn && nav){
    btn.addEventListener("click", function(){
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // close menu on click
    nav.querySelectorAll("a").forEach(function(a){
      a.addEventListener("click", function(){
        nav.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      });
    });
  }
})();