var cursor=document.querySelector("#cursor")
var main=document.querySelector("body")

main.addEventListener("mousemove",function(pos){
    cursor.style.left=pos.x+"px";
    cursor.style.top=pos.y+"px";
})

