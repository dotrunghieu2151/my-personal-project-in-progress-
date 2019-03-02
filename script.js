/* arrow-to-page */
document.getElementsByClassName('arrow-background')[0].addEventListener('click',function(){
    window.history.back();
});
document.getElementsByClassName('arrow-background')[1].addEventListener('click', function(){
    window.location.href= "list.html";
});
/* stretch input 
function stretch(input) {
    if (input.value === '' || input.value === null) {
        input.style.width = '10%';
    }
    else {
        input.style.width ='70%';
    }
}
var inputStretch = document.getElementsByTagName('input');
for ( let i = 0;i <inputStretch.length - 3;i++) {
    inputStretch[i].addEventListener('change', function(){
        stretch(inputStretch[i]);
    });
    inputStretch[i].addEventListener('focus', function(){
        inputStretch[i].style.width='70%';
    })
    inputStretch[i].addEventListener('blur',function(){
        if (inputStretch[i].value === '') {
            inputStretch[i].style.width='10%';
        }      
    });
}*/
/* show/hide terms of agreement */
var model = document.getElementById('myModel');
var modelInsideContent = document.getElementById('modelContent');
document.getElementById('show-hide').addEventListener('click', function(){
    model.style.display = 'flex';
});
document.getElementById('closing').addEventListener('click',function(){
   modelInsideContent.classList.add('flipOutX');
   setTimeout(function(){model.style.display='none'; modelInsideContent.classList.remove('flipOutX');}, 1000);
});
/* show/hide modal */
var cardCloseBtn = document.getElementById('imgCloseBtn');
var cardList = document.getElementsByClassName('card');
var getImgModel = document.getElementById('imgModel');
for ( let i = 0; i <cardList.length ; i++) {
    cardList[i].addEventListener('click', function(){
        getImgModel.style.display = 'block';
        getSlide.style.transition = 'none';
        size = carouselImages[0].clientWidth;
        counter = (i+1);
        getSlide.style.transform = 'translateX(' + ( -size * counter) + 'px)';
         innerText.innerHTML = carouselImages[counter].alt;
        sliderLoop = setInterval(loop, 4000);
    });
};
cardCloseBtn.addEventListener('click',function(){
   getImgModel.style.display='none';
   clearInterval(sliderLoop);
});
window.onclick = function(event){
   if (event.target === getImgModel) {
       getImgModel.style.display = 'none';
       clearInterval(sliderLoop);
   }  
};
/* carousel */
var getSlide = document.getElementById('slide');
var carouselImages = document.querySelectorAll('.carousel-slide img');
var getPrevBtn = document.getElementById('prevBtn'); 
var getNextBtn = document.getElementById('nextBtn');
var innerText = document.querySelector('.carousel--imginfo');
//counter 
var counter = 1;
var size = 0;
// move to the 1st img (not the clone)
// getSlide.style.transform = 'translateX(' + ( -size * counter) + 'px)'; (for convention slider)
// in this case we use the slider in the modal, the above code is not necessary.
// button listener //
getNextBtn.addEventListener('click', function(){
    if (counter >= carouselImages.length - 1) return;
    getSlide.style.transition = ' transform 0.4s ease-in-out';
    counter++;
    getSlide.style.transform = 'translateX(' + ( -size * counter) + 'px)';
    innerText.innerHTML = carouselImages[counter].alt;
    innerText.classList.add('fadeIn');
    setTimeout(function(){
       innerText.classList.remove('fadeIn'); 
    }, 500);
});
getPrevBtn.addEventListener('click', function(){
    if ( counter <= 0) return;
    getSlide.style.transition = ' transform 0.4s ease-in-out';
    counter--;
    getSlide.style.transform = 'translateX(' + ( -size * counter) + 'px)';
    innerText.innerHTML = carouselImages[counter].alt;
    innerText.classList.add('fadeIn');
    setTimeout(function(){
       innerText.classList.remove('fadeIn'); 
    }, 500);
});
// Loop to the first and last img //
getSlide.addEventListener('transitionend', function(){
    if ( carouselImages[counter].id === 'lastClone') {
        getSlide.style.transition = 'none';
        counter = carouselImages.length - 2;
        getSlide.style.transform = 'translateX(' + ( -size * counter) + 'px)';
         innerText.innerHTML = carouselImages[counter].alt;
    }
    if ( carouselImages[counter].id === 'firstClone') {
        getSlide.style.transition ='none';
        counter = carouselImages.length - counter;
        getSlide.style.transform = 'translateX(' + ( -size * counter) + 'px)';
        innerText.innerHTML = carouselImages[counter].alt;
    }
});
// auto loop when open modal //
var sliderLoop;
function loop() {
   if (carouselImages[counter].id === 'lastClone') {
       getSlide.style.transition = 'none';
       counter= carouselImages.length - 2;   
   }
   else if (carouselImages[counter].id === 'firstClone') {
       getSlide.style.transition ='none';
       counter = carouselImages.length - counter;
   }
   else {
       counter++;
    }
   getSlide.style.transition = 'transform 0.4s ease-in-out';   
   getSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
    innerText.innerHTML = carouselImages[counter].alt;
    innerText.classList.add('fadeIn');
    setTimeout(function(){
       innerText.classList.remove('fadeIn'); 
    }, 900);
};
// when mouse enter the carousel container the loop ends, when it moves out, the loop  repeats //
var carouselContainer = document.querySelector('.carousel-container');
carouselContainer.addEventListener('mouseenter', function(){
    clearInterval(sliderLoop);
});
carouselContainer.addEventListener('mouseleave', function(){
   sliderLoop = setInterval(loop,4000); 
});
/* make the slider responsive */
window.addEventListener("resize", function(){
    size = carouselImages[0].clientWidth;
    getSlide.style.transition='none';
    getSlide.style.transform = 'translateX(' + ( -size * counter) + 'px)';
    clearInterval(sliderLoop);
});