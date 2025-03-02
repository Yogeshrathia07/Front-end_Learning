var status_text = document.querySelector("#status");
var toggle_button = document.querySelector("#toggle");

var flag=0

toggle_button.addEventListener("click",function(){
    if(flag===0)
    {
        flag=1
        status_text.innerHTML = "Friend";
        status_text.style.color = "green";
        toggle_button.innerHTML = "Remove Friend";
        toggle_button.style.backgroundColor = "red";
    }
    else
    {
        flag=0;
        status_text.innerHTML = "Stranger";
        status_text.style.color = "red";
        toggle_button.innerHTML = "Add Friend";
        toggle_button.style.backgroundColor = "#6a11cb";
    }
})
