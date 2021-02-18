const urlBase = 'https://api.punkapi.com/v2/beers'



// async function
async function getBeers() {
    const beerPromise = await fetch(urlBase);
    const beers = await beerPromise.json();

    const beersDiv = document.querySelector('.beers')
    let beerHtml = ''
    beers.forEach(({ image_url, name, abv, ibu }) => {

        beerHtml += `
        <div class='beer-wrapper card'>
            <div class ='beer'>
                <img class='beer__img' src="${image_url}" />
                <h3>${name}</h3>
                <span class='beer__info'>
                    <span>ABV: ${abv}%</span>
                    <span>IBU: ${ibu}</span>
                </span>
            </div>
        </div>
         
        `;
    });

    beersDiv.innerHTML = beerHtml;
}
// trigger async function
// log response or catch error of fetch promise
getBeers()