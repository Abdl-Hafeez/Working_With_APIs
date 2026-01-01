const searchBar = document.querySelector('#search');
const fetchBtn = document.querySelector('#fetch-btn');
const img = document.querySelector('img');

fetchBtn.addEventListener('click', () => {
    console.log('fetch button clicked');
    fetchImg();
})

function fetchImg(){
    const searchedGif = searchBar.value.trim().toLowerCase();
    if(!searchedGif) return;
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=b0hiqX3ayPBlGeutCVjskgabGhDAJZjN&s=${searchedGif}`)
    .then(function(response) {
        return response.json(); 
    }).then(function(response) {
        console.log(response.data.images.original.url);
        img.src = response.data.images.original.url;
    }).catch((e) => {
        console.log(e);
    })
}