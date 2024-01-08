import './style.css'

const DOMSelectors = {
  cat1: document.getElementById("cat1"),
  cat2: document.getElementById("cat2"),
  cat3: document.getElementById("cat3"),
  cat4: document.getElementById("cat4"),
  cat5: document.getElementById("cat5"),
  cat6: document.getElementById("cat6"),
  cat7: document.getElementById("cat7"),
  container: document.getElementById("container")
};

const URL = "https://emojihub.yurace.pro/api/all"

async function getData(URL) {
  try {
      const response = await fetch(URL);
      const data = await response.json();

      data.forEach(x =>
          
          DOMSelectors.container.insertAdjacentHTML("beforeend",
          
          ` 
          <div class="wholeThing">
          <h2 class="emojiTitle">Normal People:</h2>
          <h3 class="emojiImage">${x.htmlCode}</h3>

          <h4 class="whalenTitle">Mike Whalen:</h4>
          <img src="https://3.files.edl.io/aeb1/20/12/02/154937-46cc468f-b7f4-4bb3-945e-3265bdb605d4.jpg" alt= "Michael Whalen SITHS Teacher" class="whalenImage">

          <p id= "name">Name: ${x.name} </p>
          <p id= "group">Group: ${x.group}</p>
          </div>      
          `
          ));

      console.log(data)
  } catch (error) {
      console.log(error);
  }

};

getData(URL)


function clearData() {
  DOMSelectors.container.innerHTML = ""
}


DOMSelectors.cat1.addEventListener("click", function () {
  clearData();
  getData(`${URL}/category/smileys-and-people`)
}),

DOMSelectors.cat2.addEventListener("click", function () {
  clearData();
  getData(`${URL}/category/animals-and-nature`)

}),

DOMSelectors.cat3.addEventListener("click", function () {
  clearData();
  getData(`${URL}/category/food-and-drink`)

}),

DOMSelectors.cat4.addEventListener("click", function () {
  clearData();
  getData(`${URL}/category/travel-and-places`)

}),

DOMSelectors.cat5.addEventListener("click", function () {
  clearData();
  getData(`${URL}/category/activities`)

}),

DOMSelectors.cat6.addEventListener("click", function () {
  clearData();
  getData(`${URL}/category/objects`)

}),

DOMSelectors.cat7.addEventListener("click", function () {
  clearData();
  getData(`${URL}/category/symbols`)

})




