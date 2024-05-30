document.addEventListener('DOMContentLoaded', function() {
  var mauButton = document.getElementById('mauButton');
  var nggakMauButton = document.getElementById('nggakMauButton');
  
  mauButton.addEventListener('click', function() {
    window.location.href = "https://wa.me/6282245184223?text=Yay!%20Mari%20kita%20main!";
  });
  
  nggakMauButton.addEventListener('click', function() {
    window.location.href = "https://wa.me/6282245184223?text=Oh,%20oke.%20Mungkin%20lain%20kali%20ya.";
  });
});
