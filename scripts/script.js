let output = "<table><thead><th>Full Name</th><th>Email</th><th></th></thead>";

//https://jsonplaceholder.typicode.com/users/1/posts

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {

        data.forEach(element => {
            output = output + `<tr><td> ${element.name} </td><td> ${element.email}</td><td><a class="button" href="./posts.html?id=${element.id}">Get User’s Posts</a></td></tr>`;
        });

        output = output + "</table>"
        document.getElementById("root").innerHTML = output;
    });
