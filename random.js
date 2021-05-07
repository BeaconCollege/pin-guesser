var pin = document.getElementById("random")
let pinsArray = [];

function listPins() {
  pin.innerHTML = pinsArray;
}

function guessPIN() {
    let randomPin = Math.floor((Math.random() * 9999) + 1);
    if (pinsArray.includes(randomPin)) {
        randomPin = Math.floor((Math.random() * 9999) + 1);
        pinsArray.push(randomPin)
        ifs(randomPin, pin)
    } else {
        pinsArray.push(randomPin)
        ifs(randomPin, pin)
    }
}

function ifs(randomPin, pin) {
    if (randomPin.toString().length == 3) {
        pin.innerHTML = '0' + randomPin
    } else if (randomPin.toString().length == 2) {
        pin.innerHTML = '00' + randomPin
    } else {
        pin.innerHTML = randomPin
    }
}
