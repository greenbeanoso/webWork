const fristButton = document.querySelector("#ImgPlayer button:nth-of-type(1)");
const secondButton = document.querySelector("#ImgPlayer button:nth-of-type(2)");
fristButton.addEventListener("click", () => ImgPlayerClick(-1));
secondButton.addEventListener("click", () => ImgPlayerClick(1));
const dots = document.querySelectorAll("#dotBox button")
for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", () => dotClick(i))

}
console.log("hi");
var index = 1;
updImg(index);
function dotClick(i) {
  console.log(i)
  index = i + 1
  updImg(index)
}
function ImgPlayerClick(R) {
  index = udtIndex(R);
  updImg(index);
  console.log(index);
}
function udtIndex(value) {
  const length = document.querySelectorAll(".unit").length;
  if (value + index > length) {
    return ((index + value) % (length + 1)) + 1;
  } else if (value + index < 1) {
    return index + (value % length) + length;
  } else {
    return index + value;
  }
}
function updImg(index) {
  console.log("upd");
  var unitbefore = document.querySelector(
    "#ImgPlayer .unit:nth-of-type(" + udtIndex(-1).toString() + ")"
  );
  var unit = document.querySelector(
    "#ImgPlayer .unit:nth-of-type(" + index.toString() + ")"
  );
  var unitafter = document.querySelector(
    "#ImgPlayer .unit:nth-of-type(" + udtIndex(1).toString() + ")"
  );
  console.log(udtIndex(-1), index, udtIndex(1))
  console.log(unitbefore);
  console.log(unit);
  console.log(unitafter);
  unit.style.transform = "translateX(-50%) scale(1)";
  unit.style.opacity = "1";
  unitbefore.style.transform = "translateX(-150%) scale(0.7)";
  unitbefore.style.opacity = "0.2";
  unitafter.style.transform = "translateX(50%) scale(0.7)";
  unitafter.style.opacity = "0.2";
  for (let j = 0; j < dots.length; j++) {
    dots[j].style.backgroundColor = "black"
  }
  dots[index - 1].style.backgroundColor = "white"
}

function autoplay() {
  // console.log("下一張")
  setTimeout(autoplay, 5000)
  index = udtIndex(1)
  updImg(index)
}
autoplay()