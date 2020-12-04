// CRUD  stand for Create, Read, Update, Delete
// https://jsonplaceholder.typicode.com/
 https://jsonplaceholder.typicode.com/
// Methods

// Read - operation
// GET - method
// status 200

// Create - operation
// POST - method
// sttaus 201

// Update - operation
// PUT - method
// PATCH - method
// status 204

// Delete - operation
//DELETE - method
// status 202

// 4.x.x
// 400 - Bad request
// 404 - Not Found

// 5.x.x

// GET(listing)
const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
const getPosts = fetch(`${baseUrl}`).then(res => res.json()).then((posts) => {
    console.log('posts', posts);
});
console.log(getPosts.then((posts) => {
    posts
}));

