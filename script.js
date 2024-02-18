// document.addEventListener("DOMContentLoaded", function () {
//   const cursorDot = document.getElementById("cursor-dot");

//   document.addEventListener("mousemove", function (e) {
//     // Update the position of the dot based on cursor coordinates
//     cursorDot.style.left = e.pageX + "px";
//     cursorDot.style.top = e.pageY + "px";
//   });

//   // Ensure the dot stays within the window
//   document.addEventListener("mouseleave", function () {
//     // Move the dot to a position outside the window to hide it
//     cursorDot.style.left = "-100px";
//     cursorDot.style.top = "-100px";
//   });
// });


const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
var timeout;
function circlechaptakaro() {
  clearTimeout(timeout);
  // define  default scale value
  var scalex = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;
  window.addEventListener("mousemove", function (dets) {
    xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);

    yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);
    xprev = dets.clientX;
    yprev = dets.clientY;

    circleMousefollower(xscale, yscale);

    timeout = setTimeout(function () {
      // document.querySelector("#cursor-dot").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
    }, 100);
    // console.log(xdiff,ydiff );
  });
}



circlechaptakaro();

function circleMousefollower(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector('#cursor-dot').style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;
  })
}
function firstPageAnim() {
  const tl = gsap.timeline();
  tl.from("nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })

    .to(".boundingelem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: -1,
      stagger: .2

    })
    .from('#chotafooter', {
      y: -'10',
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut

    })
}



firstPageAnim();
circleMousefollower();


document.querySelectorAll(".elem").forEach(function (elem) {
var rotate= 0;
var diffe=0;

elem.addEventListener("mouseleave", function (dets) {
  // Target the image within the current ".elem"
  
  gsap.to(elem.querySelector("h1"),{
    opacity:.5,
    paddingLeft:'0px',  
    ease: "power2.Out"
    
    
  })
  gsap.to(elem.querySelector("h5"),{
    opacity:.5,
    
    ease: "power2.Out"
   
    
    
  })

  // Use GSAP to animate the opacity of the image
  gsap.to( elem.querySelector("img"), {
    // display: block,
    opacity: 0,
    ease: Power3,
    duration:0.5,
  // Log mouse coordinates
  // console.log(details.clientX, details.clientY);
});
});
  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;

    diffe=dets.clientX-rotate;
    rotate= dets.clientX;
    // Target the image within the current ".elem"
    gsap.to(elem.querySelector("h1"),{
      opacity:.2,
      paddingLeft:'2.5%',
      ease: "power2"
      
    })
    gsap.to(elem.querySelector("h5"),{
      opacity:.2,
      
      ease: "power2",
      
    })


    // Use GSAP to animate the opacity of the image
    gsap.to( elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top:diff,
      left: dets.clientX,
      rotate:gsap.utils.clamp(-20,20,diffe*.8)   });

    // Log mouse coordinates
    // console.log(details.clientX, details.clientY);
  });
});
// Assuming there's a parent element containing all the circles with the ID "iconset"
function scrollToBottom() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

document.querySelectorAll(".circle").forEach(function(circle) {
  circle.addEventListener('click', scrollToBottom);
});









