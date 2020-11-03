function guessPIN() {
  var pin = document.getElementById("random")
  pin.innerHTML = Math.floor((Math.random() * 9999) + 1);
}
