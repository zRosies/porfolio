
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
  