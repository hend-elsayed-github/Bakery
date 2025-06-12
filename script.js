const images=['images/bakery1.avif','images/bakery2.jpg','images/bakery3.jpg','images/bakery4.avif']
const img =document.getElementById("homeImg")
let index=0
img.src=images[index]
setInterval(()=>{
    if(index>=0 && index<images.length)
        {
            img.src=images[index]
            index++
        }
        else
        {
            index=0
            img.src=images[index]
        }
},3000)

document.getElementsByClassName("menu")[0].addEventListener("click", function() {
    document.getElementsByClassName("navElementsMobile")[0].style.display="flex"
})



document.getElementById("collaspseIcon").addEventListener("click", function() {
    document.getElementsByClassName("navElementsMobile")[0].style.display="none"
})


// for (var i=0;i< document.getElementsByClassName("mobile-element").length;i++) {
//     document.getElementsByClassName("mobile-element")[i].addEventListener("click", function() {
//     document.getElementsByClassName("navElementsMobile")[0].style.display="none"
// })
// }