let homeScoreb3 = document.getElementById("home-score-btn-3");
let homeStoreEl =document.getElementById("home-score")
let guestScoreb3 = document.getElementById("guest-score-btn-3");
let guestStoreEl =document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0

function add3() {
    homeScore += 3
    homeStoreEl.textContent = homeScore
}

function add2() {
    homeScore += 2
    homeStoreEl.textContent = homeScore
}

function add1() {
    homeScore += 1
    homeStoreEl.textContent = homeScore
}
//-------------------------------Guests-------------------------------//

function add3Guest() {
    guestScore += 3
    guestStoreEl.textContent = guestScore
}

function add2Guest() {
    guestScore += 2
    guestStoreEl.textContent = guestScore
}

function add1Guest() {
    guestScore += 1
    guestStoreEl.textContent = guestScore
}