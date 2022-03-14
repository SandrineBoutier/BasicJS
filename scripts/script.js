//Au chargement du DOM

window.onload = InitApp;


function InitApp() {
    addElementToDOM();
    updateElementGeneratedInDOM();
    addClickFunctionToDiv();
    getDataFromAPI();
    setInterval(setDiscoDiv, 1000);
}

function addElementToDOM() {
    var root = document.getElementById("root");
    var html = "<div id='domelement'>Je suis une div</div>"
    root.innerHTML = html;
}

function updateElementGeneratedInDOM() {
    var domelement = document.getElementById("domelement");
    domelement.style.backgroundColor = "red";
}

function addClickFunctionToDiv() {
    var domelement = document.getElementById("domelement");
    domelement.addEventListener("click", divClicked);
}
// {"name":"michael","age":70,"count":233482}
function getDataFromAPI() {
    loading(0);
    fetch('https://api.agify.io/?name=michael')
        .then(function (response) {
            loading(50);
            console.log(response);
            return response.json();
        })
        .then(function (jsonObject) {
            console.log(jsonObject);
            var domelement = document.getElementById("domelement");
            domelement.innerText += " " + jsonObject.name;
            domelement.innerText += " " + jsonObject.age;
            domelement.innerText += " " + jsonObject.count;
            loading(100);
        }).catch(function (err) {
            console.log(err)
        });
}

function loading(width) {
    var bar = document.getElementById("myBar");
    bar.style.width = width + "%";
    bar.innerText = width + "%";
}

function setDiscoDiv() {
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    domelement.style.backgroundColor = `#${randColor.toUpperCase()}`
}


function divClicked(event) {
    alert(event.target.innerText)
}

