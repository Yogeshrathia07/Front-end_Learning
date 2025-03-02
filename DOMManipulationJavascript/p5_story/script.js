// var arr=[1,2,3,4,5,69]

// var str=""
// arr.forEach(function(i){
//     str+=i
// })
// console.log(str)

// -------------------- 
var arr=[
    {
        dp:"https://i.pinimg.com/736x/4e/7c/c2/4e7cc287ca5068058ba8cdd4a3063542.jpg",story:"https://i.pinimg.com/736x/b4/36/90/b43690a16f69721df0ec17a7cf2fc84d.jpg"
    },
    {
        dp:"https://i.pinimg.com/736x/44/ac/6f/44ac6f7abe969f875c35da72ec6976ac.jpg",story:"https://i.pinimg.com/736x/a1/2f/c7/a12fc780f680b481d0f0d1f113d6a294.jpg"
    },
    {
        dp:"https://i.pinimg.com/736x/ea/7b/ef/ea7bef29704f29185af12db7cfc3eed7.jpg",story:"https://i.pinimg.com/736x/d9/d8/df/d9d8df59025ac65353b241418c866673.jpg"
    },
    {
        dp:"https://i.pinimg.com/736x/5d/24/c4/5d24c4c0ec57157c2bbe473feb9b2cb8.jpg",story:"https://i.pinimg.com/736x/2c/35/ee/2c35eedf0409ea77aa831c3113ec6213.jpg"
    },
    {
        dp:"https://i.pinimg.com/736x/f6/35/0e/f6350e39e68a83f2fa7786e6e1897fe1.jpg",story:"https://i.pinimg.com/736x/02/e9/92/02e9921b0db1d0f8ef03a53f67af09ad.jpg"
    },
]

var str=""
arr.forEach(function(dpi,idx)
{
    // console.log(dpi.dp)
    // console.log(idx)  // idx will print the index
    str+=`<div class="story"><img id="${idx}" src="${dpi.dp}" alt=""></div>`
})

document.querySelector("#stories").innerHTML=str

var stories=document.querySelector("#stories")
stories.addEventListener("click",function(i){
    // console.log(i.target.id) // Give id of the image
    // console.log(arr[i.target.id].story)
    document.querySelector("#display_story").style.display="block"
    document.querySelector("#display_story").style.backgroundImage=`url(${arr[i.target.id].story})`
    setTimeout(function()
{
    document.querySelector("#display_story").style.display="none"

},1000)
})