const iconOpenMenu = document.querySelector(".header-right > a")
const displayOnClick = document.querySelector(".hamburger-menu")

iconOpenMenu.addEventListener("click", function () {
    displayOnClick.style.display = "initial"
})

const iconCloseMenu = document.querySelector(".close")

iconCloseMenu.addEventListener("click", function () {
    displayOnClick.style.display = "none"
})