document.getElementById("btn").addEventListener("click", function() {change();})


var defaultDates = window.localStorage.getItem('defaultDates');
defaultDates = defaultDates.split(" ");
var dates = window.localStorage.getItem('dates');
dates = dates.split(" ");
dates = dates.map(Number);
console.log(dates);
dates.pop();
var titles = window.localStorage.getItem('titles');
titles = titles.split(" ");
console.log(titles);
var sortedDates = [];
for (const date of dates) {
    for (const dateVar of dates) {
        if (date < dateVar) {
            sortedDates.splice(sortedDates.indexOf(dateVar), 0, date)
            break;
        } else {sortedDates.push(date); break;}
    }
}

var sortedTitles = [];
for (const date of sortedDates) {
    sortedTitles.push(titles[dates.indexOf(date)]);
}


dates = sortedDates;
titles = sortedTitles;
console.log(dates);
console.log(titles);


initiateElements();


function resetDate(value) {
    var datesList = dates;
    datesList[value] = defaultDates[value];
    const set = chrome.storage.local.set({'dates': datesList}, function() {return});
    deleteElement(value);
    createElement(value, datesList[value]);
}
function deleteElement(value) {
    console.log(value);
    var element = document.getElementById("div" + value);
    console.log(element);
    element.remove();
}

function createElement(value, date) {
    var title = "Check on " + titles[value] + " in:";
    title = document.createTextNode(title);
    var dateText = date + " days";
    var dateNode = document.createTextNode(dateText);
    var titleLabel = document.createElement("h2");
    titleLabel.classList.add("title");
    titleLabel.appendChild(title);
    var dateLabel = document.createElement("h2");
    dateLabel.classList.add("date");
    dateLabel.appendChild(dateNode);
    var resetButton = document.createElement("button");
    resetButton.addEventListener("click", function() {resetDate(date)});
    resetButton.appendChild(document.createTextNode("Reset Date"));
    var newDiv = document.createElement("div");
    newDiv.id = "div" + value;
    newDiv.appendChild(titleLabel);
    newDiv.appendChild(dateLabel);
    newDiv.appendChild(resetButton);
    var li = document.getElementById("li" + value);
    li.appendChild(newDiv);
}

function initiateElements() {
    for (const item of dates) {
            var num = dates.indexOf(item);
            var title = "Check on " + titles[num] + " in:";
            title = document.createTextNode(title);
            var date = item + " days";
            date = document.createTextNode(date);
            var titleLabel = document.createElement("h2");
            titleLabel.classList.add("title");
            titleLabel.appendChild(title);
            var dateLabel = document.createElement("h2");
            dateLabel.classList.add("date");
            dateLabel.appendChild(date);
            var resetButton = document.createElement("button");
            resetButton.addEventListener("click", function() {resetDate(dates.indexOf(item))});
            resetButton.appendChild(document.createTextNode("Reset Date"));
            var newDiv = document.createElement("div");
            newDiv.id = "div" + num;
            newDiv.appendChild(titleLabel);
            newDiv.appendChild(dateLabel);
            newDiv.appendChild(resetButton);
            var newLi = document.createElement("li");
            newLi.id = "li" + num;
            newLi.appendChild(newDiv);

            if (item <= 3) {document.getElementById("list1").appendChild(newLi);}
            else {document.getElementById("list2").appendChild(newLi);}
    }
}

function change() {
    window.open(chrome.runtime.getURL("edit-tasks.html"), "_blank");
}