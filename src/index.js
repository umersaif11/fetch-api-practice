// index.js
import "./styles.css";

const image =  document.querySelector('img');
fetch('https://api.giphy.com/v1/gifs/translate?api_key=Rocr3dF9OJIPffDstJlOTANXJBymd59v&s=cats',
    {mode: 'cors'}
).then(
    function(response) {
        console.log(response.json);
    }
).then(
    function(response) {
        console.log(response);
    }
)