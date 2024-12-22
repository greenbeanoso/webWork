const buttons = document.querySelectorAll("#map button")
const cnts = document.querySelectorAll(".NewsCnt p")
const img = document.querySelectorAll("#NewsCntBox img")
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => ChangeNews(i))
}
function ChangeNews(index) {
    for (let i = 0; i < cnts.length; i++) {
        cnts[i].style.opacity = "0"
        img[i].style.opacity = "0"
    }
    cnts[index].style.opacity = "1";
    img[index].style.opacity = "1";
}