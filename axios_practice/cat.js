const cat = document.getElementById('cat');

axios.get('https://api.thecatapi.com/v1/images/search?size=full')
    .then(res => {
        const catUrl = res.data[0].url;
        const catImg = document.createElement('img');
        catImg.src = catUrl;
        cat.appendChild(catImg);
    })
    .catch(error => {
        console.error('Error: ', error);
    });
