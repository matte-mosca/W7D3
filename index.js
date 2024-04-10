const fetchBooks = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      console.log(response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Generic Fetch error");
      }
    })

    .then((BooksData) => {
      console.log(BooksData);

      const row = document.getElementById("books-row");
      BooksData.forEach((book) => {
        const col = document.createElement("col");
        col.classList.add("col");
        const card = document.createElement("card");
        card.classList.add("card");

        card.innerHTML = `<img src="${book.img}" class="card-img-top" />
            <div class="card-body">
              <p class="card-title">${book.title}</p>
              <p class="card-text"> ${book.price}</p>
              <button type="button" class="btn btn-primary Scarta">Scarta</button>
            </div>`;
     
        const removeBtn = card.querySelector(".Scarta")
        removeBtn.addEventListener("click", (event) => {
          row.removeChild(col)
        })
        col.appendChild(card)
        row.appendChild(col)
      })
    })
    
    .catch((error) => {
      console.log(error);
    });
    
};
window.onload = () => {fetchBooks()}


