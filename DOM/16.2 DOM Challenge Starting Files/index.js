document.query

const lists = document.querySelectorAll(".list");
const secondItem = lists[1];
secondItem.innerHTML = "LC";

document.firstElementChild.lastElementChild.querySelector("ul").lastElementChild.innerHTML = "Angela";
document.querySelector("li").style.color = "red";
document.querySelector("button").style.backgroundColor = "yellow";
document.querySelector("h1").classList.add("huge"); // applied CSS class .huge into h1