# Core Deliverables

[x] fetch data from json
[x] add all ramen images <img> to #ramen-menu <div>.
[x] click event to display ramen detail. Properties? see json
[] create new ramen (<form>?)
[] add to #ramen-menu <div> (submit event listener?)

# Data Shape
[
  {
    "id": 1,
    "name": "Shoyu Ramen",
    "restaurant": "Nonono",
    "image": "./assets/ramen/shoyu.jpg",
    "rating": 7,
    "comment": "Delish. Can't go wrong with a classic!"
  },

# Advanced Deliverables
[x] see details of first ramen on page load
[] update rating and comment of ramen by form submit
<form id="edit-ramen">
  <h4>Update the Featured Ramen</h4>
  <label for="rating">Rating: </label>
  <input type="number" name="rating" id="new-rating" />
  <label for="new-comment">Comment: </label>
  <textarea name="new-comment" id="new-comment"></textarea>
  <input type="submit" value="Update" />
</form>
[] delete ramen (.remove) (Not fetch method: DELETE)

# Extra Advanced Deliverables

POST /ramens
DELETE /ramens/:id
PATCH /ramens/:id
[] persist rating and comment (PATCH)
[] persist new ramen created (POST)
[] persist ramen delete (DELETE)