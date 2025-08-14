// index.js
import "./styles.css";

const image =  document.querySelector('img');
const imgButton = document.querySelector('button#new-img');
const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-button');
const h2 = document.querySelector('h2');

const getNewImage = () => {
    const searchParameter = searchInput.value ? encodeURIComponent(searchInput.value) : 'cats';
    // h2.textContent = (searchInput.value || 'cats') + '@Giphy-API';
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=Rocr3dF9OJIPffDstJlOTANXJBymd59v&s=${searchParameter}`,
        {mode: 'cors'})
        .then(function(response) {  
            return response.json();
        })
        .then(function(response) {
            console.log(response);
            image.src = response.data.images.original.url;
        })
        .catch(function(error) {
            console.log('Error Fetching:', error);
        })
}
imgButton.addEventListener('click', getNewImage);
// searchButton.addEventListener('click', getNewImage)
getNewImage();
