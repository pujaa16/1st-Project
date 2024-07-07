function navAnimation(){
    let nav = document.querySelector("nav")

nav.addEventListener("mouseenter",function(){
let tl = gsap.timeline()

tl.to(".nav_bottom",{
    height:"24vh"
})
tl.to(".navPart2 h5",{
display:"block"
})
tl.to(".navPart2 h5 span",{
    y:0,
    // duration:0.3,
    stagger:{
        amount:0.6
    }
})

})



nav.addEventListener("mouseleave",function(){
    let tl = gsap.timeline()
    
    tl.to(".navPart2 h5 span",{
        y:25,
        // duration:0.3,
        stagger:{
            amount:0.2
        }
    })
    tl.to(".navPart2 h5",{
        display:"none",
        duration:0.
    })
    tl.to(".nav_bottom",{
        height:0,
        duration:0.1
    })
    
    })
    
}


function page2Animation(){
    
let rightElems = document.querySelectorAll(".right_elem")

rightElems.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
      gsap.to(elem.childNodes[3],{
        opacity:1,
        scale:1
      })
    })
    elem.addEventListener("mouseleave",function(){
        gsap.to(elem.childNodes[3],{
            opacity:0,
            scale:0
          })
    })
    elem.addEventListener("mousemove",function(dets){
    gsap.to(elem.childNodes[3],{
        x:dets.x - elem.getBoundingClientRect().x-70,
        y:dets.y - elem.getBoundingClientRect().y-160,
 
    })
    })
})
}


function page3VideoAnimation(){
    let page3Center = document.querySelector(".page3_center")
let video = document.querySelector("#page3 video")

page3Center.addEventListener("click",function(){
video.play()
gsap.to(video,{
    transform:"scaleX(1) scaleY(1)",
    opacity:1,
    borderRadius:0
})
})

video.addEventListener("click",function(){
    video.play()
    gsap.to(video,{
        transform:"scaleX(0.7) scaleY(0)",
        opacity:0,
        borderRadius:"30px",
    })

})
}



// navAnimation()
//page2Animation()
//page3VideoAnimation()


var sections = document.querySelectorAll(".sec_right")

sections.forEach(function (elem) {
    elem.addEventListener("mouseenter", function() {
        elem.childNodes[3].style.opacity = 1
        elem.ChildNodes[3].play()

    })

    elem.addEventListener("mouseleave", function() {
        elem.childNodes[3].style.opacity = 0
        elem.ChildNodes[3].load()

    })
})

