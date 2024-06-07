var tasks = fetch(chrome.runtime.getURL("tasks.txt")).then((response) => response.text()).catch(error => console.error);
tasks = await tasks;
tasks = tasks.split("\n");
var dates = [];
var titles = [];
for (const item of tasks) {
    if (tasks.indexOf(item) % 2 == 0) {
        titles.push(item);
    } else {
        dates.push(Number(item));
    }
}
const template = document.getElementById("li_template");
for (const item of dates) {
    console.log(titles[dates.indexOf(item)]);
    var title = "Check on " + titles[dates.indexOf(item)] + " in:";
    title = document.createTextNode(title);
    var date = item + " days";
    date = document.createTextNode(date);
    var titleLabel = document.createElement("h2");
    titleLabel.classList.add("title");
    titleLabel.appendChild(title);
    var dateLabel = document.createElement("h2");
    dateLabel.classList.add("date");
    dateLabel.appendChild(date);
    var resetButton = document.createElement("button", onclick="resetDate");
    resetButton.appendChild(document.createTextNode("Reset Date"));
    var newDiv = document.createElement("div");
    newDiv.appendChild(titleLabel);
    newDiv.appendChild(dateLabel);
    newDiv.appendChild(resetButton);
    document.getElementById("list").appendChild(newDiv);
}

function resetDate() {
}