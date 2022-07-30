console.log("Let's get this party started!");

async function getGif(term){
    const listGif = await axios.get(`http://api.giphy.com/v1/gifs/search`,{
        params: {
            q: term,
            api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'
        }
    });
    return listGif.data;
}
function createGifDiv(gif){
    let div = document.createElement('div');
    let image = document.createElement('img');
    image.src = gif;
    div = putGifInDiv(div,image);
    return div;
}
function putGifInDiv(div,img){
    div.append(img);
    return div;
}
function appendGifToPage(gif){
    let htmlDiv = document.getElementById('gifDiv');
    let imgDiv = createGifDiv(gif);
    htmlDiv.append(imgDiv);
}
const gifAdd = document.getElementById('buttonAdd');
gifAdd.addEventListener('click',function(e){
    e.preventDefault;
    let inputP = document.getElementById('inputP');
    let term = inputP.value;
    let gifURL = getGif(term);
    console.log(term);
    appendGifToPage(gifURL);
})
console.log('after data');
