async function fetchCats() {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10')
        if (!response.ok) {
            throw new Error('Request failed');
        }
        const data = await response.json();
        console.log(`Response data = ${JSON.stringify(data)}`);
        const cats = [...data];
        console.log(`Cats array = ${JSON.stringify(cats)}`);

        const randomCatsSection = document.getElementById('random-cats');
        const randomCatsList = randomCatsSection.querySelector('ul');

        for (const cat of cats) {
            const catList = document.createElement('li');
            const catImg = document.createElement('img');
            catImg.src = cat.url;
            catList.appendChild(catImg);
            console.log(cat);
            randomCatsList.appendChild(catList);
        }
    }
    catch(error){
      console.error('An error occured', error);
    }
}
fetchCats();