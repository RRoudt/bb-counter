let homePointsText = document.getElementById("home-points-text");
let guestPointsText = document.getElementById("guest-points-text");

let home_score = 0;
let guest_score = 0;

const add_home = number => {
    home_score += number;
    homePointsText.textContent = home_score;
}

const add_guest = number => {
    guest_score += number;
    guestPointsText.textContent = guest_score;
}