var funnyThings =[
    "Padel", 
    "Fotboll", 
    "Programmera", 
    "CNC", 
    "TV-spel"
];
var listContainer = document.createElement("div");
var listElement = document.createElement("ul");
    document.getElementsByTagName("body")[0].appendChild(listContainer);
    listContainer.appendChild(listElement);


for (i = 0; i < funnyThings.length; i++) {
    var addList;
    addList = document.createElement("li");
    addList.innerHTML = funnyThings[i];
    listElement.appendChild(addList);
    
    console.log(funnyThings[i]);

}