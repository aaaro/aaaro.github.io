window.addEventListener("load", function () {
    window.cookieconsent.initialise({
        "palette": {
            "popup": {
                "background": "#FFFFFF"
            },
            "button": {
                "background": "#05386B"
            }
        },
        "content": {
            "message": "Strona może wykorzystywać pliki Cookies.",
            "dismiss": "Akceptuję pliki Cookies",
            "link": "Dowiedz się więcej"
        },
        "position": "bottom-right"
    })
});

function onload() {
    var frames = document.getElementsByTagName("iframe");

    Array.from(frames).forEach((frame) => {
        if (frame.id !== "home")
            frame.style.display = "none";
    })

    document.getElementById("root").style.display = "block"

    ReloadFrames();
}
function ReloadFrames() {
    var frames = document.getElementsByTagName('iframe');
    Array.from(frames).forEach((frame) => {
        frame.style.height = $(window).height() - $("#menu").height() + "px";
    })
}
function show(id){
    var frames = document.getElementsByTagName('iframe');
    Array.from(frames).forEach(function (e, i) {
        if(e.id != id) {
            e.style.display = "none";
        }
        else {
            e.style.display = "block";
        }

    })
}