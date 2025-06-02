// gsap.to("#box1",{
//     x: 1000,
//     duration:2,
//     delay:1,
//     backgroundColor:"blue" ,
//     repeat:-1,
//     yoyo: true,
//     rotate: 360,
//     borderRadius: "50%",

// })

// gsap.from("#box2",{
//     x: 1000,
//     duration:2,
//     delay:1,
//     backgroundColor:"blue" ,
//     repeat:-1,
//     yoyo: true,
    

// })

// gsap.to("#box3",{
//     x: 1000,
//     duration:2,
//     delay:1,
//     backgroundColor:"blue" ,
//     repeat:-1,
//     yoyo: true,
//     rotate: 360,
//     borderRadius: "50%",

// })

var tl = gsap.timeline()
   
tl.to("box1",{
    
    x: 1000,
     duration:2,     
     delay:1,

})

tl.to("box2",{
    duration:1.5,
    x:1000,
    rotate:360,

})

tl.to("box3",{
    duration:1.5,
    x:1000,
    rotate:360,

})