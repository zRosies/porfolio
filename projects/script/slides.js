let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


let slideIndex2 = 1;

function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
    let i;
    let slides2 = document.getElementsByClassName("mySlides2");
    let dots2 = document.getElementsByClassName("dot2");
    if (n > slides2.length) { slideIndex2 = 1 }    
    if (n < 1) { slideIndex2 = slides2.length }
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    for (i = 0; i < dots2.length; i++) {
        dots2[i].className = dots2[i].className.replace(" active", "");
    }
    slides2[slideIndex2 - 1].style.display = "block";
    dots2[slideIndex2 - 1].className += " active";
}

const buttons = document.querySelectorAll(".buttons button");
const firstButton = document.querySelector(".buttons button:first-child");
// Attach click event listeners to each button
buttons.forEach((button) => {
    firstButton.classList.add("active")
  button.addEventListener("click", () => {
    // Remove the .active class from all buttons
    // firstButton.classList.style="active";
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });
    
    // Add the .active class only to the clicked button
    button.classList.add("active");
  });
});

//Update
const date= new Date();
const yeardate= date.getFullYear();
const year = document.querySelector("#year");
const lastUpd= document.querySelector("#update");



const change = document.lastModified;
const last = new Date(change);
const go = last.toLocaleString("pt-Br");

year.textContent=yeardate;
lastUpd.textContent=go;

console.log(year);

// Effect on Scroll
const containers = document.querySelectorAll("section .projects div");

function applyEffectOnScroll() {
  let windowHeight = window.innerHeight;
  windowHeight+=550;  

  const windowWidh= window.innerWidth;

  if(windowWidh< 880){
    containers.forEach(pictureContainer => {
      const pictureTop = pictureContainer.getBoundingClientRect().top;

      if (pictureTop < windowHeight*0.5) {
        const overlays = pictureContainer.querySelectorAll(".overlay");
        overlays.forEach(overlay => {
          overlay.style.height = "100%";
          // overlay.querySelector(".middle").style.opacity = 1;
          // overlay.querySelector(".middle").style.width = "300px";
        });
      }
    });
  }
}

window.addEventListener("scroll", applyEffectOnScroll);