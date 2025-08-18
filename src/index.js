// index.js
import "./styles.css";

const image =  document.querySelector('img');
const imgButton = document.querySelector('button#new-img');
const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-button');
const h2 = document.querySelector('h2');
const loadingPlaceholder = 'https://placehold.co/480x360/282828/D3D3D3?text=Loading...';

async function getNewImage() {
    image.src = loadingPlaceholder;
    const searchParameter = searchInput.value ? encodeURIComponent(searchInput.value) : 'cats';
    h2.textContent = (searchInput.value || 'cats') + '@Giphy-API';
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=Rocr3dF9OJIPffDstJlOTANXJBymd59v&s=${searchParameter}`,
            {mode: 'cors'});
        const responseData =  await response.json();
        if(responseData.data && Object.keys(responseData.data).length > 0){
                image.src = responseData.data.images.original.url;                
            } else {
                 image.src = 'https://placehold.co/480x360?text=No+GIF+Found';
            }
    }
    catch(error) {
        console.log('Error Fetching:', error);
        image.src = 'https://placehold.co/480x360?text=Error';
    }
}
imgButton.addEventListener('click', getNewImage);
searchButton.addEventListener('click', getNewImage)
getNewImage();

 