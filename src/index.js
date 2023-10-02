import './styles.css';
var images_track = document.querySelector('.carousel-image-container');
var images = document.querySelectorAll('.item');
var image_size = images_track.clientWidth;
var nextBtn = document.querySelector('.carousel-right-btn');
var prevBtn = document.querySelector('.carousel-left-btn');
var counter = 0;

//changs the image and container size based on the window size
window.onresize = setsizes;

nextBtn.addEventListener('click', () =>{
    
    if(counter>=images.length-1){
        counter= 0;
        images_track.style.transform = `translateX(-${image_size*counter}px)`;
        var active_dot = document.querySelector('.active-carousel-dot');
        active_dot.classList.remove('active-carousel-dot');
        var next_dot = document.querySelector('.dot');
        next_dot.classList.add('active-carousel-dot');
        return;
    }
    counter= counter+1
    images_track.style.transform = `translateX(-${image_size*counter}px)`
    var active_dot = document.querySelector('.active-carousel-dot');
    active_dot.classList.remove('active-carousel-dot');
    var active_dot = active_dot.parentElement;
    var next_dot = active_dot.nextElementSibling;
    next_dot =next_dot.firstChild
    next_dot.classList.add('active-carousel-dot');
})


prevBtn.addEventListener('click', () =>{
    if(counter ==0) {
        counter = images.length-1;
        images_track.style.transform = `translateX(-${image_size*counter}px)`;
        var active_dot = document.querySelector('.active-carousel-dot');
        active_dot.classList.remove('active-carousel-dot');
        var prev_dot = document.querySelectorAll('.dot');
        prev_dot[prev_dot.length-1].classList.add('active-carousel-dot');
        return;}
    counter = counter-1;
    images_track.style.transform = `translateX(-${image_size*counter}px)`;
    var active_dot = document.querySelector('.active-carousel-dot');
    active_dot.classList.remove('active-carousel-dot');
    var active_dot = active_dot.parentElement;
    var prev_dot = active_dot.previousElementSibling;
    prev_dot =prev_dot.firstChild
    prev_dot.classList.add('active-carousel-dot');
})

function setsizes(){
    console.log('sizes was fired');
     images_track = document.querySelector('.carousel-image-container');
     images = document.querySelectorAll('.item');
     image_size = images_track.clientWidth;
     nextBtn = document.querySelector('.carousel-right-btn');
     prevBtn = document.querySelector('.carousel-left-btn'); 
     images.forEach(image =>{
        image.style.width = `${image_size}px;`;
        images_track.style.transform = `translateX(-${image_size*counter}px)`
        
     })

}