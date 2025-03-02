// var ele1=document.querySelector("#ele1")
// var img=document.querySelector("#ele1 img")

// ele1.addEventListener("mousemove", function (event) {
//     img.style.left = event.offsetX + "px";
// });

var ele=document.querySelectorAll(".box")

ele.forEach(function(i){
    // console.log(i.childNodes)
    i.addEventListener("mouseenter",function()
    {
        // console.log("enter")
        i.childNodes[3].style.opacity=1;
    })
    i.addEventListener("mouseleave",function()
    {
        i.childNodes[3].style.opacity=0;
        console.log("exit")
    })
    i.addEventListener("mousemove",function(value){
        i.childNodes[3].style.left=value.offsetX+"px"
    })
})