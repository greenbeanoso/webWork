var result = document.querySelector("#result");
var submitButton = document.querySelector("#submit-button");
var CNTlist = [
  { title: "甲", content: "假資料1" },
  { title: "乙", content: "假資料2" },
  { title: "丙", content: "假資料3" },
];
submitButton.addEventListener("click", () => {
  submit();
});
function submit() {
  var input = document.querySelector("#input-text");
  console.log(input.value);
  updateResult(input.value);
}
function updateResult(searchText) {
  var content = [];
  for (var i = 0; i < CNTlist.length; i++) {
    if (
      CNTlist[i].title.includes(searchText) ||
      CNTlist[i].content.includes(searchText) ||
      searchText == ""
    ) {
      content.push(`<div><h1>${CNTlist[i].title}</h1>
                <p>${CNTlist[i].content}</p>
                </div>`);
    }
  }
  result.innerHTML = content.join("");
}
updateResult("");
