

const url = "https://api.giphy.com/v1/gifs/search";
let gifName = "?q=";
const key = "&api_key=cvNHAb5tinxc05Y7YhCJlm7kS29btrJn";
const limit = "&limit=50";
const input = document.getElementById('search');

let q = "";

let urlComplete = "";


const btn = document.getElementById('btn')

btn.addEventListener("click", () =>{

    document.getElementById('list').innerHTML = ""
    q = document.getElementById('search').value
    urlComplete = url + gifName + q + key + limit
    getData()
})


const getData = () => {
    fetch(urlComplete)
        .then((response) => response.json())
        .then((giphy) => {
            console.log(giphy)

    for (let i = 0; i < giphy.data.length; i++){
        const gif = document.createElement('img')
        gif.src = giphy.data[i].images["downsized"].url
        gif.className = 'giphy'
        document.getElementById('list').appendChild(gif)
    }
        })
        .catch((error) => console.error(error));
}

getData();

// data[0].images.original.url
// data[3].images.downsized.url