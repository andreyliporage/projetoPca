const currentPage = location.pathname
const menuItems = document.querySelectorAll("header nav a")

for (item of menuItems) {
    if(currentPage == item.getAttribute("href")) {
        item.classList.add("bold")
    }
}

console.log(currentPage)

// const modalOverlay = document.querySelector(".modal-overlay")
// const cards = document.querySelectorAll(".card")

// for (let card of cards) {
//     card.addEventListener("click", function() {
//         modalOverlay.classList.add("active")
//     })
// }

// document.querySelector(".close-modal").addEventListener("click", function() {
//     modalOverlay.classList.remove("active")
// }) 