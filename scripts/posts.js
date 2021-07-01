const urlParams = new URL(window.location.href);
const id = urlParams.searchParams.get('id');
const link = `https://jsonplaceholder.typicode.com/users/${id}/posts`
let output = "";

fetch(link)
    .then(response => response.json())
    .then(data => {
        // document.getElementById("root").innerHTML = data[0].body;

        data.forEach(element => {
            output = output + `
            <div class="card">
            <h2>${element.title}</h2>
            <hr>
            <p>${element.body}</p>
            </div>`
        });

        document.getElementById("root").innerHTML = output;
    })