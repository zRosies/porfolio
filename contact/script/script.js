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



// Function to change language

function changeLanguage(language) {
  fetch(`./script/translate.json`)
      .then(response => response.json())
      .then(translation => {
          const elementsToTranslate = document.querySelectorAll('[data-translation]');
          
          elementsToTranslate.forEach(element => {
              const translationKey = element.getAttribute('data-translation');
              element.textContent = translation[language][translationKey]; 
          });
         
      })
      .catch(error => console.error('Error loading translation:', error));
}


const switchButton = document.querySelector('#lang'); 
const switchButton2 = document.querySelector('#lang2'); 
let currentLanguage = 'english'; // 


switchButton.addEventListener('change', () => {
  console.log("aaaaaa");
  const language = switchButton.value.toLowerCase();
  if (language==="portuguese") {
      changeLanguage('portuguese');
      
      
  }
  else {
      changeLanguage('english');
    
      
  }
  // languageLoad(currentLanguage)
});

switchButton2.addEventListener('change', () => {
console.log("aaaaaa");
const language = switchButton2.value.toLowerCase();
if (language==="portuguese") {
    changeLanguage('portuguese');
    
    
}
else {
    changeLanguage('english');
  
    
}

});

