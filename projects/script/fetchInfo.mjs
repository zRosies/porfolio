
function convertToJson(res) {
    // console.log(res)
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Bad Response");
    }
  }

export async function getData(jsonName='projects.json'){
    return fetch(`./json/${jsonName}`)
            .then(convertToJson)
            .then((data)=>data);
            

}

// getData()