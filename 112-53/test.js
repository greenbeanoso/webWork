var fristName = document.querySelector("#fristName")
var lastName = document.querySelector("#lastName")
var phone = document.querySelector("#phone")
var password = document.querySelector("#password")
var editFristName = document.querySelector("#editFristName")
var editLastName = document.querySelector("#editLastName")
var editPhone = document.querySelector("#editPhone")
var editPassword = document.querySelector("#editPassword")
var editID = document.querySelector("#editID")
var sub = document.querySelector("#sub")
var list = document.querySelector("#list")
var subedit = document.querySelector("#subEdit")
subedit.addEventListener("click", () => {
    fetch("testedit.php?id=" + editID.value + "&frist_name=" + editFristName.value + "&last_name=" + editLastName.value + "&phone=" + editPhone.value + "&password=" + editPassword.value).then((data) => {
        upd()
    })
})
sub.addEventListener("click", () => {
    // let data = new FormData()
    // data.append("first_name", fristName.value)
    // data.append("last_name", lastName.value)
    // data.append("phone", phone.value)
    // data.append("password", password.value)
    // fetch("test.php", {
    //     "method": "POST",
    //     "body": data
    // }).then((data) => {
    //     console.log("成功")
    // })
    fetch("test.php?frist_name=" + fristName.value + "&last_name=" + lastName.value + "&phone=" + phone.value + "&password=" + password.value).then((data) => {
        console.log("成功")
        upd()
    })
})
// fetch("testfetchall.php?first_name=" + fristName.value + "&last_name=" + lastName.value + "&phone=" + phone.value + "&password=" + password.value).then((data) => {
//     console.log("成功")
// })
function upd() {
    fetch("testfetchall.php").then((data) => {
        return data.json()
    }).then((data) => {
        // console.log(data)
        list.innerHTML = "<tr><td>id</td><td>fristName</td><td>lastName</td><td>phone</td><td>password</td><tr>"
        console.log(data)
        for (let i = 0; i < data.length; i++) {
            let arr = JSON.stringify(data[i]);
            list.innerHTML += `<tr>
            <td>${data[i].id}</td>
            <td>${data[i].frist_name}</td>
            <td>${data[i].last_name}</td>
            <td>${data[i].phone}</td>
            <td>${data[i].password}</td>
            <td>
                <button onclick='edit(${arr})'>修改</button>
                <button onclick="del(${data[i].id})">刪除</button>
            </td>
            </tr>`
            // document.querySelector("#del" + i.toString()).addEventListener("click", () => del(i))
            // var a = document.querySelector("#edit" + i.toString())
            // a.addEventListener("click", () => edit(i, data))
            // console.log(document.querySelector("#edit" + i.toString()))

        }
        // console.log(list.innerHTML)

    })
}
function del(id) {
    fetch("testdel.php?id=" + id).then((data) => {
        upd()
    })
}
function edit(data) {
    console.log(data)
    // console.log("hi")
    // console.log(data[i].frist_name)
    editID.value = data.id
    editFristName.value = data.frist_name
    editLastName.value = data.last_name
    editPhone.value = data.phone
    editPassword.value = data.password
}

upd()
