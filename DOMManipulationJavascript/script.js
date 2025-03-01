var a=document.querySelector("h1")
// console.log(a);
a.innerHTML="This is new HTML"
a.style.color="red"
a.style.backgroundColor="black"

a.addEventListener("click",function(){
    console.log("Button id clicked");
    a.style.color="yellow";
    a.style.backgroundColor="grey";
})