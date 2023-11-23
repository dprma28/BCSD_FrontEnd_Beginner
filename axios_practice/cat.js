const cat = document.getElementById('cat');

async function randomCat() {
    try {
        const res = await axios.get('https://api.thecatapi.com/v1/images/search?size=full')
        const catUrl = res.data[0].url;
        const catImg = document.createElement('img');

        catImg.src = catUrl;
        catImg.width = 300;
        catImg.height = 300;

        cat.appendChild(catImg);
    } catch(error) {
        console.error('Error: ', error);
    }
}

randomCat();