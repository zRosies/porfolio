const jsBtn = document.querySelector("#javascript");
const csharpBtn = document.querySelector("#csharp");
const webBtn= document.querySelector("#web");
const pythonBtn= document.querySelector("#python");


function ResetOverlay(){
     const wind= window.innerWidth;
     if(wind<800){
     const containers = document.querySelectorAll("section .projects div");
     containers.forEach(pictureContainer => {
          const pictureTop = pictureContainer.getBoundingClientRect().top;
    
          
            const overlays = pictureContainer.querySelectorAll(".overlay");
            overlays.forEach(overlay => {
              overlay.style.height = "0%";
              // overlay.querySelector(".middle").style.opacity = 1;
              // overlay.querySelector(".middle").style.width = "300px";
            });
        
        });
     }
}

jsBtn.addEventListener("click",()=>{
    console.log("AA")
    const sections = document.querySelectorAll("section");
    const pokeClass= document.querySelector(".java");
   sections.forEach((section)=>{
        section.style.display="none"

   })
   pokeClass.style.display="flex";
   window.innerHeight=0;
   ResetOverlay();
   

})


webBtn.addEventListener("click",()=>{
    console.log("AA")
    const sections = document.querySelectorAll("section");
    const web= document.querySelector(".web");
   sections.forEach((section)=>{
        section.style.display="none"

   })
   web.style.display="block";
   ResetOverlay();

})

csharpBtn.addEventListener("click",()=>{
    console.log("AA")
    const sections = document.querySelectorAll("section");
    const sharp = document.querySelector(".csharp");
    // const web= document.querySelector(".web");
   sections.forEach((section)=>{
        section.style.display="none"

   })
   sharp.style.display="block";
   ResetOverlay();

})

pythonBtn.addEventListener("click",()=>{
    console.log("AA")
    const sections = document.querySelectorAll("section");
    const py = document.querySelector(".python")
    // const web= document.querySelector(".web");
   sections.forEach((section)=>{
        section.style.display="none"

   })
    py.style.display="block";
    ResetOverlay();

})


//Hambutton

function toggleMenu(){
     document.querySelector(".navigation").classList.toggle("open");
     let navigation = document.querySelector(".navigation");
     let hamButton= document.querySelector("#ham")
     if (navigation.classList.contains('open')) {
             // hamButton.style.display = 'none';
             
             // hamButton.style.fontSize = '2.5em';
             hamButton.style.boxShadow ='0px 3px 10px rgba(0, 255, 255)' 
             hamButton.innerHTML = "X";}
     else {
         hamButton.style.boxShadow ='none' 
         hamButton.innerHTML = "&#9776";
         }
     // document.querySelector(".navigation").style.display="block";
     console.log("AAA")
     
   }
   
   const ham = document.querySelector('#ham');
   ham.onclick= toggleMenu;