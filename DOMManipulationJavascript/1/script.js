var bulb=document.querySelector("#bulb")
var btn=document.querySelector("button")

var flag=true

btn.addEventListener("click",function(){
    if(flag)
    {

        bulb.style.backgroundColor="Yellow"
        flag=false;
    }
    else{
        
        bulb.style.backgroundColor="transparent"
        flag=true;
    }
})