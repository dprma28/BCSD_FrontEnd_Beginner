const cat = document.getElementById('cat');
const catImg = document.createElement('img');

catImg.width = 200;
catImg.height = 200;

cat.appendChild(catImg);

async function randomCatChange() {
    try {
        const res = await axios.get('https://api.thecatapi.com/v1/images/search?size=full')
        const catUrl = res.data[0].url;
        
        catImg.src = catUrl;
    } catch(error) {
        console.error('Error: ', error);
    }
}

async function randomCatAppend() {
    const cat = document.getElementById('cat');

    try {
        const res = await axios.get('https://api.thecatapi.com/v1/images/search?size=full')
        const catUrl = res.data[0].url;
        const catImg = document.createElement('img');

        catImg.src = catUrl;
        catImg.width = 200;
        catImg.height = 200;

        cat.appendChild(catImg);  
    } catch(error) {
        console.error('Error: ', error);
    }
}