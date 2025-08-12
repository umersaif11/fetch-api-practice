// index.js
import "./styles.css";

const image =  document.querySelector('img');
const imgButton = document.querySelector('button#new-img');

const getNewImage = () => {
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=Rocr3dF9OJIPffDstJlOTANXJBymd59v&s=cats',
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
getNewImage();
