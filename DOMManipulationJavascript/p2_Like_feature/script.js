var heart_icon=document.querySelector("#heart_icon")
var card=document.querySelector("#card")

card.addEventListener("dblclick",function(){
    // console.log("Double click")
    heart_icon.style.opacity = "1";
    heart_icon.style.transform = "scale(1.5)";
    setTimeout(function () {
        heart_icon.style.scale="1.5";
        heart_icon.style.transform = "scale(0)";
        // heart_icon.style.opacity = "0";
    }, 1000);


})
