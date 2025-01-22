const left = document.querySelector("#player button:nth-of-type(1)")
const right = document.querySelector("#player button:nth-of-type(2)")
left.addEventListener("click", () => updplayer(mapindex(-1)))
right.addEventListener("click", () => updplayer(mapindex(1)))
const imgs = document.querySelectorAll("#player div")
var index = 0
function mapindex(i) {

    console.log(index, imgs)
    console.log(i)
    if (index + i < 0) {
        console.log(imgs.length())
        return (imgs.length())

    } else if (index + i > imgs.length) {
        return (0)
    } else {
        console.log(index, i)
        return (index + i)
    }

}
// index = 
function updplayer(i) {
    index = i
    console.log(index)
    imgs[mapindex(-1)].style.transform = "translateX(75%) scale(0.5)"
    imgs[mapindex(-1)].style.opacity = "0.5"
    imgs[index].style.transform = "translateX(0%) scale(1)"
    imgs[index].style.opacity = "1"
    imgs[mapindex(1)].style.transform = "translateX(-75%) scale(0.5)"
    imgs[mapindex(1)].style.opacity = "0.5"
}

updplayer(index)