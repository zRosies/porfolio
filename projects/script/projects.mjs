import {getData} from "./fetchInfo.mjs"

const projectDiv = document.querySelector('.java .projects');
const csharpDiv = document.querySelector('.csharp .projects');
const pythonDiv = document.querySelector('.python .projects');
const webDiv = document.querySelector('.web .projects')


function projectTemplate(data){
    const template= 
    `
    <div>
        <img src="${data.image}" alt="${data.name}">
        <div class="overlay">
            <a href="${data.link}" target="_blank"><div class="text">${data.name} <br>Check it out</div></a>
            
        </div>
    </div>`
    return template;
}

function renderProject(divName, jsonName, position='beforeend'){
    const projectInfo= getData(jsonName);
    projectInfo.then((projectInfo)=>

        projectInfo.forEach(projecObject => {
            // projectTemplate(projectObject);
            console.log(projecObject)
            divName.insertAdjacentHTML(position, projectTemplate(projecObject))
            
        })
    
    
    );       


}


renderProject(projectDiv, 'projects.json');
renderProject(csharpDiv,'csharp.json');
renderProject(pythonDiv, 'python.json');
renderProject(webDiv , 'web.json')




