function showDetails(title, genre, year, director, description, image) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-genre').innerText = genre;
    document.getElementById('modal-year').innerText = year;
    document.getElementById('modal-director').innerText = director;
    document.getElementById('modal-description').innerText = description;
    document.getElementById('modal-image').src = image;
    
    document.getElementById('modal').style.display = "block";
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}