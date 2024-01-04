const URL = "https://collectionapi.metmuseum.org/public/collection/v1/objects/20"

async function getData(URL) {
    try {
        const response = await fetch(URL);
        const data = await response.json();

        console.log(data)
    } catch (error) {
        console.log(error);
    }
}

getData(URL)