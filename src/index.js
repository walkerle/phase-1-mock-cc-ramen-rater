// Global
const URL ='http://localhost:3000/ramens'
let selectedRamen // Advanced

// DOM Selectors
const rMenu = document.querySelector('#ramen-menu')
const rImg = document.querySelector('.detail-image')
const rName = document.querySelector('.name')
const rRestaurant = document.querySelector('.restaurant')
const rRating = document.querySelector('#rating-display')
const rComment = document.querySelector('#comment-display')
const form = document.querySelector('#new-ramen')
const editForm = document.querySelector('#edit-ramen') // Advanced

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

        const deleteBtn = document.createElement('button')
        const container = document.createElement('div')
        deleteBtn.textContent = " X "
        container.id = "container"

        container.append(store, deleteBtn)
        rMenu.append(container);

        store.addEventListener('click', e => {
            // console.log('I was clicked')
            renderOneStore(element)
        })

        deleteBtn.addEventListener('click', e =>{
            // console.log('deleteRamen func invoked');
            container.remove();
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

editForm.addEventListener('submit', updateRamen)

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

    // paste image to center
    rImg.src = e.target.image.value;
    rName.textContent = e.target.name.value;
    rRestaurant.textContent = e.target.restaurant.value;
    rRating.textContent = parseInt(e.target.rating.value);
    rComment.textContent = e.target['new-comment'].value;
    // console.log(rComment.textContent)
    // console.log(e.target)
    // console.log(e.target['new-comment'])
    // console.log(e.target['new-comment'].value)
    
    form.reset()
}

function updateRamen(e) {
    e.preventDefault();
    // console.log('updateRamen func invoked');
    rRating.textContent = parseInt(e.target.rating.value);
    rComment.textContent = e.target['new-comment'].value;
    editForm.reset();
}

// Initializers
getStores(URL);