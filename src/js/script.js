$(document).ready(function(){

  var toggler = document.getElementById('toggler');
  toggler.onclick = function(e){
    e.preventDefault();
    toggler.classList.toggle('toggler-close');
    document.getElementById('nav').classList.toggle('main-nav__mobile-list--visible');
  }

});
