
const fristname = document.querySelector("#fristName")
const lastname = document.querySelector("#lastName")
const phone = document.querySelector("#phone")
const Newcode = document.querySelector("#Newcode")
const entercode = document.querySelector("#VerifyCode")
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
    Newcode.textContent = newgencode
    anser = newgencode.split("").sort().join("")
    console.log(anser)
}
function subinfo() {
    var info = {
        "fristName": fristname.value,
        "lastName": lastname.value,
        "phone": phone.value
    }
    console.log(info)
    if (info["fristName"] != "" && info["lastName"] != "" && info["phone"] && entercode.value == anser) {
        document.location.href = "home.html";
    } else if (entercode.value != anser) {
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
    entercode.value = ""
}