const drags = document.querySelectorAll("#drag div span")
const submit = document.getElementById("sub")
const target = document.querySelector("#drag-target div")
submit.addEventListener("click", () => DoSubmit())
function regen() {
    for (let i = 0; i < drags.length; i++) {
        drags[i].textContent = Math.floor(Math.random() * 10)
        drags[i].remove()
        document.querySelector("#drag div").append(drags[i])


    }
}
regen()
$(function () {

    // $("#drag div span").draggable({
    //     revert: "invalid",
    //     containment: "document",
    //     cursor: "move",
    // });

    // $("#drag-target div").droppable({
    //     accept: "#drag div > span",
    //     drop: function (event, ui) {
    //         sortMove(ui.helper[0], ui.offset, document.querySelector("#drag-target div"))
    //     }
    // });
    // $("#drag div").droppable({
    //     accept: "#drag-target div > span",
    //     drop: function (event, ui) {
    //         sortMove(ui.helper[0], ui.offset, document.querySelector("#drag div"))
    //     }
    // });
    $("#drag, #drag-target").sortable({
        connectWith: ".connectedSortable"
    }).disableSelection();
    // $("#drag-target div").sortable({
    //     // item:"span"
    // })
})

$("form").submit((e) => {
    e.preventDefault();
    var Verify = document.querySelectorAll("#drag-target div")
    var last = 0
    var now
    for (let j = 0; j < Verify.length; j++) {
        now = parseInt(Verify[j].textContent, 10)
        // console.log(last, now)
        if (now < last || Verify.length != 4) {
            alert("驗證碼錯誤")
            regen()
            return
        }
        last = now
    }

    document.location.href = "home.html";
    console.log("你已送出表單")
    fetch(`Tickets.php?frist_name=${$("input[name=first_name]").val()}
        &last_name=${$("input[name=last_name]").val()}
        &phone=${$("input[name=phone]").val()}
        &password=${$("input[name=password]").val()}`).then((data) => {

        document.location.href = "home.html";
        window.alert("issue tickets successfully");
    })
})


function DoSubmit() {
    // var Verify = document.querySelectorAll("#drag-target div")
    // var last = 0
    // var now
    // for (let j = 0; j < Verify.length; j++) {
    //     now = parseInt(Verify[j].textContent, 10)
    //     // console.log(last, now)
    //     if (now < last || Verify.length != 4) {
    //         alert("驗證碼錯誤")
    //         regen()
    //         return
    //     }
    //     last = now
    // }

    // var fristName = document.getElementsByName("first_name")[0].value
    // var lastName = document.getElementsByName("last_name")[0].value
    // var phone = document.getElementsByName("phone")[0].value
    // var password = document.getElementsByName("password")[0].value

    // if (fristName == "" || lastName == "" || phone == "" || password == "") {
    //     alert("有欄位是空的")
    //     regen()
    //     return
    // }
    // fetch(`Tickets.php?frist_name=${fristName}
    // &last_name=${lastName}
    // &phone=${phone}
    // &password=${password}`).then((data) => {
    //     window.alert("issue tickets successfully");
    //     document.location.href = "home.html";
    // })

}
function sortMove(ui, position, Tel) {
    console.log(Tel.children)
    var len = Tel.children.length
    var Rmax = 1040
    var Lmax = 880
    var low
    var up
    ui.style.left = 0
    ui.style.top = 0
    ui.style.right = 0
    ui.style.bottom = 0
    for (let i = 0; i < len; i++) {
        if (Lmax + (Rmax - Lmax) / len * i < position["left"]) {
            low = i

        } else if (Lmax + (Rmax - Lmax) / len * i > position["left"]) {
            up = i
            break
        }

    }
    if (low == undefined && up == undefined) {
        Tel.append(ui)
        console.log("無", low, up)
    } else if (low == undefined) {
        Tel.prepend(ui)
        console.log("前", low, up)
    } else {
        Tel.children[low].after(ui)
        console.log("差 or 後", low, up)
    }
}
