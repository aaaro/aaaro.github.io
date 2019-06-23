class translation {
    constructor(key, eng) {
        this.key = key;
        this.eng = eng;
    }
}

var translations = [];

var txt = "";
function reqListener () {
    txt = this.responseText;
}
  
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://aaaro.github.io/Model/translations.xml");
oReq.send();

if (window.DOMParser) {
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(txt, "text/xml");
} else { // Internet Explorer
    xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    xmlDoc.async = false;
    xmlDoc.loadXML(txt);
}
var x = xmlDoc.documentElement.childNodes;
x.forEach(element => {
    if (element.childNodes[0].innerHTML != null && element.childNodes[1].innerHTML != null) {
        var t = new translation(element.childNodes[0].innerHTML, element.childNodes[1].innerHTML);
        translations.push(t);
    }
});

function translateFromMyXml(lng) {
    if (lng == "eng") {
        for (var i = 0; i < 3; i++) {
            var translatableElements = document.getElementsByTagName("iframe")[i].contentWindow.document.getElementsByClassName("translatable");
            Array.forEach(translatableElements, (element) => {
                var current = element.innerText;
                var currentTranslation = translations.findIndex(t => { return t.key == current });
                if (currentTranslation != -1)
                    element.innerHTML = translations[currentTranslation].eng;
            });
        }
    }
    else if (lng == "pl") {
        for (var i = 0; i < 3; i++) {
            var translatableElements = document.getElementsByTagName("iframe")[i].contentWindow.document.getElementsByClassName("translatable");
            Array.forEach(translatableElements, (element) => {
                var current = element.innerText;
                var currentTranslation = translations.findIndex(t => { return t.eng == current });
                if (currentTranslation != -1)
                    element.innerHTML = translations[currentTranslation].key;
            });
        }
    }
}