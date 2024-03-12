
var cur=document.querySelector(".cursor");
var curBlur=document.querySelector(".cursorBlur");

document.addEventListener("mousemove",function(dets){
cur.style.left=dets.x + "px";
cur.style.top=dets.y + "px";
curBlur.style.left=dets.x - 130 + "px";
curBlur.style.top=dets.y - 130 + "px"; 
})

// var h4=document.querySelectorAll(".nav h4");
// h4.forEach(function(elm){
//     elm.addEventListener("mouseenter",function(){
//         cur.style.scale=3;
//         cur.style.border="1px solid #fff";
//         cur.style.backgroundColor="transparent"

//     })
//     elm.addEventListener("mouseleave",function(){
//         cur.style.scale=1;
//         cur.style.border="0px solid rgb(249, 74, 21)"
//         cur.style.backgroundColor=" rgb(249, 74, 21)"
//     })
// })

gsap.to(".nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"90px",
    // radius:"30px",
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -10%",
        scrub:0.5
    }
})
gsap.to(".main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        // markers:true,
        start:"top -20%",
        end:"top -100%",
        scrub:2
    }
})
gsap.from(".about_us_in",{
    y:100,
    opacity:0,
    // duration:1,
    scrollTrigger:{
        trigger:".about_us",
        scroller:"body",
        // markers:true,
        start:"top 45%",
        end:"top 50%",
        scrub:2
    }
})
gsap.from(".about_us #img1",{
    x:-100,
    opacity:0,
    scrollTrigger:{
        trigger:".about_us",
        scroller:"body",
        // markers:true,
        start:"top 45%",
        end:"top 50%",
        scrub:true,
    }
},"anim")
gsap.from(".about_us #img2",{
    x:100,
    opacity:0,
    scrollTrigger:{
        trigger:".about_us",
        scroller:"body",
        // markers:true,
        start:"top 45%",
        end:"top 50%",
        scrub:true
    }
},"anim")


gsap.from(".page4 h1",{
    y:50,
    // duration:1,
    scrollTrigger:{
        trigger:".page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 80%",
        scrub:2
    }
})
gsap.from(".page1 .arrow i ",{
    y:10,
    duration:0.7,
    yoyo:true,
    repeat:-1,
})