const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.loglin');
const registerlink= document.querySelector('.registerlin')
const btnpopup= document.querySelector('.joinus')
const btnclose= document.querySelector('.iconclose')
const bb = document.querySelector('.container1');

const text = document.querySelector('.future');
//Animation
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


textLoad();
    
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
  console.log("AAA")
  
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

