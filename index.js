let message = document.querySelector("#message")

function addMovie(event) {
    event.preventDefault();
    let inputField = document.querySelector("input").value;
    let movie = document.createElement("li");
    let movieTitle = document.createElement("span");
    movieTitle.textContent = inputField;
    movieTitle.addEventListener("click", crossOffMovie);
    movie.appendChild(movieTitle);
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.addEventListener("click", deleteMovie)
    movie.appendChild(deleteBtn);
    document.querySelector("ul").appendChild(movie);
    document.querySelector("input").value = "";
}

let submitMovie = document.querySelector("form");
submitMovie.addEventListener("submit", addMovie);

function deleteMovie(event) {
    event.target.parentNode.remove();
    message.textContent = "Movie Deleted!";
}

function crossOffMovie(event) {
    event.target.classList.toggle(".checked");
    if(event.target.classList.contains(".checked")){
        message.textContent = "Movie Watched! NOTE: the CSS wasn't working for some reason, so there isn't a strikethrough."
    }
    else{
        message.textContent = "Movie added back! NOTE: the CSS wasn't working for some reason, so there isn't a strikethrough."
    }
}