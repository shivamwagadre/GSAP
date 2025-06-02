var cursor = document.querySelector("#cursor")
var image = document.querySelector("#image")
var cursor = document.querySelector("#cursor")

main.addEventListener("mousemove",function(dets){

    gsap.to(cursor,{
        x: dets.x,
        y: dets.y,
        duration:0.6,
    })

})

image.addEventListener("mouseenter",function(){
    cursor.innerHTML = "view more"

    gsap.to(cursor,{
        scale:4,
        backgroundColor:"#ffffff8a"
    })
})

image.addEventListener("mouseleave",function(){
    cursor.innerHTML = ""

    gsap.to(cursor,{
        scale:1,
        backgroundColor:"#fff"
    })
})