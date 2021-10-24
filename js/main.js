//typing career
var typed = new Typed('#typing_info', {
    strings: ["Nhat Lam", "Front end Web Developer", "Freelancer"],
    typeSpeed: 90,
    backSpeed: 30,
    loop: true,
});

// $(window).on('load', function() {
let typing_desc = $("#typing_desc")
gsap.from(typing_desc, {opacity: 0, y: 20, duration: 1.3});


//custom cursor
const cursor = $("#cursor_custom");
const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const mouse = { x: pos.x, y: pos.y };
const speed = 0.35;

const xSet = gsap.quickSetter(cursor, "x", "px");
const ySet = gsap.quickSetter(cursor, "y", "px");
window.addEventListener("mousemove", e => {    
    mouse.x = e.x;
    mouse.y = e.y;  
  });

gsap.ticker.add(() => {
  
    // adjust speed for higher refresh monitors
    const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
    
    pos.x += (mouse.x - pos.x) * dt;
    pos.y += (mouse.y - pos.y) * dt;
    xSet(pos.x);
    ySet(pos.y);
  });