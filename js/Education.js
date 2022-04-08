function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}


// UNIVERSITIES API


document.getElementById("searchbutton").addEventListener("click", function () {
    document.getElementById("searchthing").value;
    var searchcontent = document.getElementById("searchthing").value;
    getUNI(searchcontent);
    
    console.log(searchcontent)
  })
  
  
  async function getUNI(country) {
    const mainContainer = document.getElementById("main-container");
    const mainresult = document.getElementById("resultdiv")
    if (mainresult){
      console.log(mainresult)
      mainresult.remove()
  
    }
    const api_url = 'http://universities.hipolabs.com/search?country=' + country;
      const response = await fetch(api_url);
      const data = await response.json();
      const resultdiv = document.createElement("div")
      resultdiv.setAttribute("id", "resultdiv")
      for (let i = 0; i < data.length; i++) {
      const {name, web_pages} = data[i];
      const newP = document.createElement("a")
      newP.href = web_pages;
      newP.innerHTML = `<div class="uni-container"> ${name} </div>`; 
     
      resultdiv.appendChild(newP); 
      }
  mainContainer.appendChild(resultdiv);
  }