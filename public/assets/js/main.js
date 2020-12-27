





// function Img(index) {
//     index.style.height = "40vh";
//     index.style.transition = "all .5s";

// }

// function normalImg(index) {
//     index.style.height = "50vh";

// }
const ThreePonkt = document.getElementById("ThreePonkt-nav")
const close_X = document.getElementById("close-x")
const show_ThreePonkt = document.getElementById("show-Threeponkt-section")

ThreePonkt.addEventListener("click", () => {
    show_ThreePonkt.style.right = "0%"
})
close_X.addEventListener("click", () => {
    show_ThreePonkt.style.right = "-100%"
})