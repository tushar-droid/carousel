import './styles.css';
var images_track = document.querySelector('.carousel-image-container');
var images = document.querySelectorAll('.item');
var image_size = images_track.clientWidth;
var nextBtn = document.querySelector('.carousel-right-btn');
var prevBtn = document.querySelector('.carousel-left-btn');
var counter = 0;


window.onresize = setsizes;

nextBtn.addEventListener('click', () =>{
    if(counter>=images.length-1) return;
    counter= counter+1
    images_track.style.transform = `translateX(-${image_size*counter}px)`
    console.log(image_size*counter);
})


prevBtn.addEventListener('click', () =>{
    if(counter ==0) return;
    counter = counter-1;
    images_track.style.transform = `translateX(-${image_size*counter}px)`
    console.log(image_size*counter);
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