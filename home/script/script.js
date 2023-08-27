const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.loglin');
const registerlink= document.querySelector('.registerlin')
const btnpopup= document.querySelector('.joinus')
const btnclose= document.querySelector('.iconclose')
const bb = document.querySelector('.container1');

const text = document.querySelector('.future');
//Animation



    
//Event Listeners
registerlink.addEventListener('click',()=> {
    wrapper.classList.add('active');
})

loginLink.addEventListener('click',()=> {
    wrapper.classList.remove('active');
})

btnpopup.addEventListener('click',()=> {
    wrapper.classList.add('active-pop')
    ;
    bb.classList.add('active-pop')
    ;
})

btnclose.addEventListener('click',()=> {
    wrapper.classList.remove('active-pop');
    bb.classList.remove('active-pop')
    ;
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
  
  
}

const ham = document.querySelector('#ham');
ham.onclick= toggleMenu;
//Last Update

const date= new Date();
const yeardate= date.getFullYear();
const year = document.querySelector("#year");
const lastUpd= document.querySelector("#update");



const change = document.lastModified;
const last = new Date(change);
const go = last.toLocaleString("pt-Br");

year.textContent=yeardate;
lastUpd.textContent=go;


// Translating to portuguese//

const switchButton = document.querySelector('#switchButton'); 
let currentLanguage = 'english'; // 

// Function to change language

const textLoad = () => {
  let count=0;
  setTimeout(() => {
    text.textContent = "Gustavo Bispo";
  }, 0);
  setTimeout(() => {
    text.textContent = "Software Developer";
  }, 3000);
  setTimeout(() => {
    text.textContent = "Web Developer";
  }, 6000);
  setTimeout(() => {
    text.textContent = "The Future";
  }, 9000);

  setTimeout(() => {
    textLoad(count + 1);
    if(count>4){
      count=0;
    }
  }, 12000);
}

const textLoadpT = () => {
  let count=0;
  setTimeout(() => {
    text.textContent = "Gustavo Bispo";
  }, 0);
  setTimeout(() => {
    text.textContent = "Desenvolvedor de Software";
  }, 3100);
  setTimeout(() => {
    text.textContent = "Desenvolvedor Web";
  }, 6200);
  setTimeout(() => {
    text.textContent = "O Futuro";
  }, 9300);

  setTimeout(() => {
    textLoad(count + 1);
    if(count>4){
      count=0;
    }
  }, 12000);
}

let defaultLoad=true;


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

switchButton.addEventListener('click', () => {

    if (switchButton.checked) {
        changeLanguage('portuguese');
        currentLanguage = 'portuguese';
        textLoadpT();
        defaultLoad=false;
        
    }
    else if(defaultLoad){

      textLoad();

    } else {
        changeLanguage('english');
        currentLanguage = 'english';
        textLoad();
        defaultLoad=false;
    }
});

// Initial language setup
changeLanguage(currentLanguage);