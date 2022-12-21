// Global
const URL ='http://localhost:3000/ramens'

// DOM Selectors
const rMenu = document.querySelector('#ramen-menu')
const rImg = document.querySelector('.detail-image')
const rName = document.querySelector('.name')
const rRestaurant = document.querySelector('.restaurant')
const rRating = document.querySelector('#rating-display')
const rComment = document.querySelector('#comment-display')
const form = document.querySelector('#new-ramen')

// Fetch Functions
function getStores(url) {
    return fetch(url)
    .then(res => res.json())
    .then(res => {
        // console.log(res)
        renderStores(res)
        renderOneStore(res[0])
    })
}

// Render Functions
function renderStores(data) {
    // console.log(data);
    data.forEach(element => {
        const store = document.createElement('img');
        // console.log(store);
        // console.log(store.src);
        // console.log(element.image);
        store.src = element.image;
        rMenu.append(store);

        store.addEventListener('click', e => {
            // console.log('I was clicked')
            renderOneStore(element)
        })
    })

}

function renderOneStore(data) {
    // console.log(data);
    rImg.src = data.image;
    // console.log(rImg);
    // console.log(data.image);
    rName.textContent = data.name;
    rRestaurant.textContent = data.restaurant;
    rRating.textContent = parseInt(data.rating);
    rComment.textContent = data.comment;
}

// Event Listeners
form.addEventListener('submit', addRamen)

// Event Handlers
function addRamen(e) {
    e.preventDefault()
    // console.log(e);
    const nRamen = document.createElement('img');
    // console.log(e.target);
    // console.log(e.target.image);
    // console.log(e.target.image.value);
    nRamen.src = e.target.image.value
    rMenu.append(nRamen);
    form.reset()
}

// Initializers
getStores(URL);