// #95c11e

var cu=document.querySelector("#cursor")
var cub=document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(i){
    cu.style.left=i.x+"px"
    cu.style.top=i.y+"px"
    cub.style.left=i.x+"px"
    cub.style.top=i.y+"px"
})