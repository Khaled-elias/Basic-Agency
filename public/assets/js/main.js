












// ThreePonkt______

const ThreePonkt = document.getElementById("ThreePonkt-nav")
const close_X = document.getElementById("close-x")
const show_ThreePonkt = document.getElementById("show-Threeponkt-section")

ThreePonkt.addEventListener("click", () => {
    show_ThreePonkt.style.right = "0%"
})
close_X.addEventListener("click", () => {
    show_ThreePonkt.style.right = "-100%"
})