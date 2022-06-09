// 1.  specify the API url
const url = "https://jsonplaceholder.typicode.com/users";

// 2. create a function that fetches user datat from the API url

function fetchUsers() {
// Make use of the browser fetch API
fetch(url)
.then((response) => response.json())
.then((data) => {
    // Passing the userData to the renderUsers function
    renderUsers(data);});
}


// 3. create another function that will render this data (user information) in the DOM (the 'DOM is the HTML document')

function renderUsers (userData){
    // console.log("from renderUsers");
    console.log(userData);
    const ul = document.getElementById("user-list-container");
    console.log(ul);
    
    userData.forEach((user, index) => {console.log(user, index + 1);
    const li = document.createElement("li");
    li.innerHTML = `
    <span>${index + 1}.</span>
    <span>${user.name}</span>
    <span>-</span>
    <span class="username">${user.username}</span>`

    // append (repeat and attach) the current li tag inside to the ul tag
    ul.appendChild(li);
    })
}

// 4. create a search functionality to the DOM

function searchByUsername() {
    const input = document.getElementById("search");
    const ul = document.getElementById("user-list-container");
    const inputValue = input.value.toUpperCase();
    const usersList = ul.querySelectorAll("li");

    // loop through all the users and renders the one that matches the search

    for (let index = 0; index < usersList.length; index++) {
        const usernameSpanTag = usersList[index].querySelector(".username");
        const usernameSpanTagValue = usernameSpanTag.innerText.toUpperCase();
        const isMatch = usernameSpanTagValue.indexOf(inputValue) > -1;

        if (isMatch) {usersList[index].style.display="block";}
        else {usersList[index].style.display="none";}
    }
}
// calling the fetch function 
fetchUsers();