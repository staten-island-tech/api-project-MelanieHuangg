const DOMSelectors = {
    cat1: document.getElementById("cat1"),
    cat2: document.getElementById("cat2"),
    cat3: document.getElementById("cat3"),
    cat4: document.getElementById("cat4"),
    cat5: document.getElementById("cat5"),
    cat6: document.getElementById("cat6"),
    cat7: document.getElementById("cat7"),
    c8: document.getElementById("cat8"),
    container: document.getElementById("container")
  };

const URL = "https://emojihub.yurace.pro/api/all"

async function getData(URL) {
    try {
        const response = await fetch(URL);
        const data = await response.json();

        data.emojis.forEach(x =>
            
            DOMSelectors.emojis.insertAdjacentHTML("beforeend",
            

            ))









        console.log(data)
    } catch (error) {
        console.log(error);
    }
}

getData(URL)



