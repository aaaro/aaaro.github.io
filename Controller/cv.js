function onload() {
    var frames = document.getElementsByClassName("frame");
    Array.from(frames).forEach((frame) => {
        if (frame.id !== "dosw")
            frame.style.display = "none";
    })

    document.getElementById("root").style.display = "block"

}
function show(id){
    var frames = document.getElementsByClassName("frame");
    Array.from(frames).forEach(function (e, i) {
        if(e.id != id) {
            e.style.display = "none";
        }
        else {
            e.style.display = "block";
        }

    })
}