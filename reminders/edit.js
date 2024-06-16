document.getElementById("add").addEventListener("click", function() {addAnother();});
document.getElementById("delete").addEventListener("click", function() {remover();});
document.getElementById("save").addEventListener("click", function() {save();});

var dates = window.localStorage.getItem("dates");
dates = dates.split(" ");
var titles = window.localStorage.getItem("titles");
titles = titles.split(" ");

for (const item in dates) {
    addAnother(titles[dates.indexOf(dates[item])], dates[item]);
}
function remover() {
    document.getElementsByClassName("element")[document.getElementsByClassName("element").length - 1].remove();
}

function addAnother(title=null, days=null) {
    var liElement = document.createElement("li");
    liElement.classList.add("element");
    var div1 = document.createElement("div");
    div1.classList.add("floatLeft");
    var div2 = document.createElement("div");
    div2.classList.add("floatLeft");
    liElement.appendChild(div1);
    liElement.appendChild(div2);
    var title1 = document.createElement("h3");
    var titleNode1 = document.createTextNode("Text name");
    title1.appendChild(titleNode1);
    var input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.classList.add("titleInput");
    input1.value = title;
    div1.appendChild(title1);
    div1.appendChild(input1);
    var title2 = document.createElement("h3");
    var titleNode2 = document.createTextNode("Days before reminder");
    title2.appendChild(titleNode2);
    var input2 = document.createElement("input");
    input2.setAttribute("type", "text");
    input2.value = days;
    input2.classList.add("dateInput");
    div2.appendChild(title2);
    div2.appendChild(input2);
    document.getElementById("list").appendChild(liElement);
}

function save() {
    var titleList = "";
    var dateList = "";
    for (const element of document.getElementsByClassName("titleInput")) {
        titleList += element.value;
        if (element != document.getElementsByClassName("titleInput")[document.getElementsByClassName("titleInput").length - 1]) {titleList += " "};
    }
    for (const element of document.getElementsByClassName("dateInput")) {
        dateList += element.value;
        if (element != document.getElementsByClassName("titleInput")[document.getElementsByClassName("titleInput").length - 1]) {dateList += " "};
    }
    window.localStorage.setItem("titles", titleList);
    window.localStorage.setItem("dates", dateList);
    window.localStorage.setItem("defaultDates", dateList);
    alert("Success!")
    console.log(window.localStorage.getItem("titles"));
    console.log(window.localStorage.getItem("dates"));

}