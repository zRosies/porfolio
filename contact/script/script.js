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