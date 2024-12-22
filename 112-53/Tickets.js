
const fristname = document.querySelector("#fristName")
const lastname = document.querySelector("#lastName")
const phone = document.querySelector("#phone")
const Newcode = document.querySelector("#Newcode")
const drag = document.querySelectorAll("#drag div")
const reset = document.querySelector("#reset")
const submit = document.querySelector("#submit")
var newgencode
var anser
console.log(fristname)
Newcode.addEventListener("click", () => regencode())
submit.addEventListener("click", () => subinfo())
reset.addEventListener("click", () => resetvalue())
regencode()

function regencode() {
    newgencode = ""
    newgencode += (Math.floor(Math.random() * 10)).toString()
    newgencode += (Math.floor(Math.random() * 10)).toString()
    newgencode += (Math.floor(Math.random() * 10)).toString()
    newgencode += (Math.floor(Math.random() * 10)).toString()
    newgencode = newgencode.split("")
    console.log(drag)
    console.log(newgencode)
    for (let i = 0; i < drag.length; i++) {
        drag[i].textContent = newgencode[i]
    }
    anser = newgencode.sort().join("")
    console.log(anser)
}
function subinfo() {
    var info = {
        "fristName": fristname.value,
        "lastName": lastname.value,
        "phone": phone.value
    }
    console.log(info)
    if (info["fristName"] != "" && info["lastName"] != "" && info["phone"] && getentercode() == anser) {
        document.location.href = "home.html";
    } else if (getentercode() != anser) {
        window.alert("Verify Code Wrong")
    } else {
        window.alert("Missing data")
    }
    resetvalue()
}
function resetvalue() {
    fristname.value = ""
    lastname.value = ""
    phone.value = ""
    regencode()
}
$(function () {
    $("#drag").sortable({
        axis: "x"
    })
})
function getentercode() {
    var output = ""
    var now = document.querySelectorAll("#drag div")
    for (let i = 0; i < now.length; i++) {
        output += now[i].textContent
    }
    console.log(output)
    return output
}