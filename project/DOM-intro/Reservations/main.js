const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
}
const checkReservation = function () {
  let getTextFromUser = document.getElementById("userInput").value
  if (!reservations[getTextFromUser]) {
    alert("You have no reservation")
    reservations[getTextFromUser] = { claimed: true }
  }
  else {
    if (reservations[getTextFromUser].claimed) {
      console.log(reservations[getTextFromUser].claimed)
      alert("Hmm, someone already claimed this reservation")

    }
    else {
      alert("welcome " + getTextFromUser)
    }
  }



}