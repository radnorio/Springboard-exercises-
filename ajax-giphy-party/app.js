console.log("Let's get this party started!");

async function getGif(term){
    listGif = await axios.get(`http://api.giphy.com/v1/gifs/search`,{
        params: {
            q: term,
            api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'
        }
     });
    console.log(listGif.data);
    // for(let gif of listGif.data.data){
    //     console.log(gif.url);
    //     return gif.bitly_gif_url;
    // }
    appendGifToPage(listGif.data.data[0].images.original.url);
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
    getGif(term);
});
console.log('after data');
