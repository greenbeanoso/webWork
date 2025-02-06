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

    $("#drag div span").draggable({
        revert: "invalid",
        containment: "document",
        cursor: "move"
    });

    $("#drag-target div").droppable({
        accept: "#drag div > span",
        revert: function (event, ui) {
            sortMove(ui.draggable[0])
        },
        drop: function (event, ui) {
            NUMmove(1, ui.draggable[0])
        }
    });
    $("#drag div").droppable({
        accept: "#drag-target div > span",
        revert: function (event, ui) {
            sortMove(ui.draggable[0])
        },
        drop: function (event, ui) {
            NUMmove(0, ui.draggable[0])
        }
    });

})
function DoSubmit() {
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
    var fristName = document.getElementsByName("first_name")[0].value
    var lastName = document.getElementsByName("last_name")[0].value
    var phone = document.getElementsByName("phone")[0].value
    var password = document.getElementsByName("password")[0].value
    if (fristName == "" || lastName == "" || phone == "" || password == "") {
        alert("有欄位是空的")
        regen()
        return
    }
    fetch(`Tickets.php?frist_name=${fristName}
    &last_name=${lastName}
    &phone=${phone}
    &password=${password}`).then((data) => {
        window.alert("issue tickets successfully");
        document.location.href = "home.html";
    })

}
function NUMmove(dis, ui) {
    console.log(ui)
    ui.remove()
    ui.style.left = 0
    ui.style.top = 0
    ui.style.right = 0
    ui.style.bottom = 0
    if (dis) {
        target.append(ui)
    } else {
        document.querySelector("#drag div").append(ui)
    }
}
function sortMove(ui) {
    console.log("hi")
    var BestSC = 0
    var best
    for (const child of ui.parentElement.children) {
        if (BestSC < getPosition(child)[x] - getPosition(ui)[x] + getPosition(child)[y] - getPosition(ui)[y]) {
            BestSC = getPosition(child)[x] - getPosition(ui)[x] + getPosition(child)[y] - getPosition(ui)[y]
            best = child
        }
    }
    if (getPosition(best)[x] > getPosition(ui)) {
        best.after(ui)
    }
}
function getPosition(element) {

    var x = 0;
    var y = 0;
    // 搭配上面的示意圖可比較輕鬆理解為何要這麼計算
    while (element) {
        x += element.offsetLeft - element.scrollLeft + element.clientLeft;
        y += element.offsetTop - element.scrollLeft + element.clientTop;
        element = element.offsetParent;
    }

    return { x: x, y: y };
}