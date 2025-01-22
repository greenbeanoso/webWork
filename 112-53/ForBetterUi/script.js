var imgPlayerIndex = 2


function upd() {
    for (let i = 0; i < document.querySelectorAll("#ImgPlayer p").length; i++) {
        document.querySelectorAll("#ImgPlayer p")[i].style.opacity = "0";

    }
    for (let i = 0; i < document.querySelectorAll("#ImgPlayer img").length; i++) {
        document.querySelectorAll("#ImgPlayer img")[i].style.opacity = "0";

    }
    document.querySelectorAll(`#ImgPlayer img`)[imgPlayerIndex].style.opacity = "1";
    document.querySelectorAll(`#ImgPlayer p:nth-of-type(odd)`)[imgPlayerIndex].style.opacity = "1";
    document.querySelectorAll(`#ImgPlayer p:nth-of-type(even)`)[imgPlayerIndex].style.opacity = "1";
    dots[imgPlayerIndex].checked = true
}

function changeindex(x) {
    if (imgPlayerIndex + x <= 2 && imgPlayerIndex + x >= 0) {
        imgPlayerIndex += x
        upd()
    } else if (imgPlayerIndex + x > 2) {
        imgPlayerIndex = 0
        upd()
    } else {
        imgPlayerIndex = 2
        upd()
    }


}
const dots = document.getElementsByName("indexPlayer")
const next = document.getElementById("next")
const prev = document.getElementById("prev")
for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", () => {
        imgPlayerIndex = i;
        upd();
    })
}
next.addEventListener("click", () => changeindex(1))
prev.addEventListener("click", () => changeindex(-1))


upd()
function autoplay() {

    setTimeout(() => {
        changeindex(1)
        autoplay()
    }, 2500);
}
autoplay()